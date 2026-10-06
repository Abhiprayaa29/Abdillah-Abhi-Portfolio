// Pages Function: POST (or GET) /api/visit
//
// Counts one anonymous visitor. The client sends a UUID it generated and
// stored in localStorage + a first-party cookie; we never receive an IP
// address, a user agent, or any personal data.
//
// Rules:
//   - unknown visitor_id  -> insert row, isNew = true   (unique visitor +1)
//   - known visitor_id    -> isNew = false              (unique visitor unchanged)
//   - same id again inside DEDUPE_MS -> duplicate       (nothing increments)
//
// Requires the D1 binding `DB` (see README / docs/VALIDATION.md).

const COOKIE = 'abhi_vid';
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const DEDUPE_MS = 60_000;
const MAX_AGE = 60 * 60 * 24 * 365;

function json(data, status, headers) {
  return new Response(JSON.stringify(data), {
    status,
    headers: Object.assign(
      { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      headers || {}
    ),
  });
}

function readCookie(request, name) {
  const raw = request.headers.get('Cookie');
  if (!raw) return '';
  for (const part of raw.split(';')) {
    const eq = part.indexOf('=');
    if (eq < 0) continue;
    if (part.slice(0, eq).trim() !== name) continue;
    try {
      return decodeURIComponent(part.slice(eq + 1).trim());
    } catch {
      return part.slice(eq + 1).trim();
    }
  }
  return '';
}

function setCookie(response, id, secure) {
  const value = `${COOKIE}=${encodeURIComponent(id)}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure ? '; Secure' : ''}`;
  const headers = new Headers(response.headers);
  headers.append('Set-Cookie', value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

async function readId(request) {
  let id = readCookie(request, COOKIE);
  if (request.method === 'POST') {
    let body = null;
    try {
      body = await request.json();
    } catch {
      body = null;
    }
    if (body && typeof body === 'object') {
      const candidate = body.visitorId ?? body.visitor_id ?? body.id;
      if (candidate) id = String(candidate);
    }
  }
  return String(id || '').trim().slice(0, 64);
}

async function stats(db) {
  const row = await db
    .prepare('SELECT COUNT(*) AS u, COALESCE(SUM(visit_count), 0) AS t FROM visitors')
    .first();
  const uniqueVisitors = Number(row?.u ?? 0);
  const totalVisits = Number(row?.t ?? 0);
  return {
    uniqueVisitors,
    totalVisits,
    returningVisits: Math.max(0, totalVisits - uniqueVisitors),
  };
}

export async function onRequestPost(context) {
  return handle(context);
}

export async function onRequestGet(context) {
  return handle(context);
}

async function handle({ request, env }) {
  if (!env || !env.DB) {
    return json(
      { ok: false, available: false, error: 'D1 binding "DB" is not configured yet.' },
      503
    );
  }

  const id = await readId(request);
  if (!UUID_RE.test(id)) {
    return json({ ok: false, available: true, error: 'invalid visitor id' }, 400);
  }

  const now = Date.now();
  let isNew = false;
  let duplicate = false;

  const existing = await env.DB.prepare(
    'SELECT last_seen FROM visitors WHERE visitor_id = ?'
  )
    .bind(id)
    .first();

  if (!existing) {
    const res = await env.DB.prepare(
      'INSERT INTO visitors (visitor_id, first_seen, last_seen, visit_count) VALUES (?, ?, ?, 1) ON CONFLICT(visitor_id) DO NOTHING'
    )
      .bind(id, now, now)
      .run();
    const changes = Number(res?.meta?.changes ?? 0);
    isNew = changes > 0;
    duplicate = !isNew;
  } else if (now - Number(existing.last_seen) < DEDUPE_MS) {
    duplicate = true;
  } else {
    await env.DB.prepare(
      'UPDATE visitors SET last_seen = ?, visit_count = visit_count + 1 WHERE visitor_id = ?'
    )
      .bind(now, id)
      .run();
  }

  const s = await stats(env.DB);
  const secure = new URL(request.url).protocol === 'https:';
  const response = json(
    Object.assign(
      {
        ok: true,
        available: true,
        visitorId: id,
        isNew,
        duplicate,
        dedupeWindowMs: DEDUPE_MS,
      },
      s
    ),
    200
  );
  return setCookie(response, id, secure);
}
