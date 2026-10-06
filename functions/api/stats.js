// Pages Function: GET /api/stats
//
// Public, anonymous counters only. No IP address, no user agent,
// no visitor-level data is exposed - just three totals.
//
// Requires the D1 binding `DB` (see README / docs/VALIDATION.md).

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequestGet({ env }) {
  if (!env || !env.DB) {
    // 200 rather than 5xx: the route is healthy, only the D1 binding is
    // missing. A 5xx would make the browser log "Failed to load resource" on
    // every page view, which Lighthouse counts as a console error.
    return json(
      { ok: false, available: false, error: 'D1 binding "DB" is not configured yet.' },
      200
    );
  }

  const row = await env.DB.prepare(
    'SELECT COUNT(*) AS u, COALESCE(SUM(visit_count), 0) AS t FROM visitors'
  ).first();

  const uniqueVisitors = Number(row?.u ?? 0);
  const totalVisits = Number(row?.t ?? 0);

  return json({
    ok: true,
    available: true,
    uniqueVisitors,
    totalVisits,
    returningVisits: Math.max(0, totalVisits - uniqueVisitors),
    updatedAt: new Date().toISOString(),
  });
}

export const onRequestPost = onRequestGet;
