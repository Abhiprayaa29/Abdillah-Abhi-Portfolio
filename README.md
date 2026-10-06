# Abdillah Abhi — Professional Developer Portfolio

This delivery contains a dependency-free static portfolio plus the React/Vite source scaffold used during design.

## Open locally

Because the static site has no runtime dependencies, it can be served with any static file server.

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

You can also open `index.html` directly, but a local server is recommended so all browser behavior matches normal hosting.

## Included

- `index.html` / `styles.css` / `script.js` — validated static delivery.
- `cv/Abdillah-Abhi-CV.pdf` — CV copied unchanged for the download/view action.
- `assets/` — project screenshots and visuals (`assets/projects/` holds the verified repository imagery used by the project section).
- `favicon.svg` / `og.svg` / `og.png` — lightweight metadata assets (Open Graph image is 1200×630).
- `robots.txt` / `sitemap.xml` — crawl and sitemap hints for https://abhipraya.pages.dev/.
- `react-vite-source/` — React/Vite/Tailwind implementation source.
- `react-vite-source/AUDIT.md` — source audit and selection rationale.
- `docs/VALIDATION.md` — current verification results (responsive, accessibility, print, Lighthouse).
- `.editorconfig` / `.gitattributes` / `.prettierrc.json` — konsistensi format (LF, 2 spasi) agar tidak muncul diff line-ending di Windows.

## Visitor tracking (Cloudflare Pages + D1)

The portfolio counts anonymous visitors with its own first-party code. There is
**no third-party analytics**, no tracking script, no IP address and no personal
data stored - only a random UUID the browser generates for itself.

### How it works

`script.js` creates a UUID v4, keeps it in `localStorage.abhi_vid` **and** in a
first-party `abhi_vid` cookie, then posts it to `/api/visit` once the page has
loaded. The server decides what to count:

| Situation | Response | Unique visitors | Total visits |
| --- | --- | --- | --- |
| First time on this browser | `isNew: true` | +1 | +1 |
| Refresh / reopen (same device) | `isNew: false`, `duplicate: true` | unchanged | unchanged |
| Same device again after 60 s | `isNew: false`, `duplicate: false` | unchanged | +1 |
| Different device, or storage cleared | `isNew: true` | +1 | +1 |

Requests for the same visitor inside a 60-second window are collapsed into one
(`duplicate: true`), so a refresh, a double-fired request, or a retry can never
inflate the counters.

Endpoints (both return JSON, `Cache-Control: no-store`):

- `POST /api/visit` - body `{"visitorId":"<uuid>"}`; also accepts the `abhi_vid`
  cookie. Returns the visitor state plus live totals.
- `GET /api/stats` - returns `{ uniqueVisitors, totalVisits, returningVisits }`.

`returningVisits = totalVisits - uniqueVisitors`. Until the D1 binding exists
both endpoints still answer `HTTP 200` with `{"ok":false,"available":false}` -
the route is healthy, only the counter is switched off - so the site keeps
working normally and the browser never logs a failed request.

### Required: create and bind the D1 database (manual dashboard steps)

This is the only step that has to happen in your Cloudflare account. It cannot
be done from the repository.

1. Open <https://dash.cloudflare.com/> and select your account.
2. Go to **Storage & Databases → D1 → Create database** (or **Workers & Pages →
   Create → D1**).
3. Name it `portfolio-visitors`, pick a region, create it.
4. Open the new database → **Console** tab, paste the contents of
   [`schema.sql`](./schema.sql), run it. That creates the single `visitors`
   table.
5. Still inside the database, open **Settings → Database ID** and copy it.
6. Go to **Workers & Pages → `abdillah-abhi-portfolio` (your Pages project) →
   Settings → Functions → D1 database bindings → Add binding**:
   - **Variable name**: `DB` (this exact name is read by the functions)
   - **D1 database**: `portfolio-visitors`
7. Redeploy (or wait for the next git push to trigger a build).

Verify with:

```bash
curl -s https://abhipraya.pages.dev/api/stats

# before the binding (counter off, no browser error):
# {"ok":false,"available":false,"error":"D1 binding \"DB\" is not configured yet."}

# after the binding:
# {"ok":true,"available":true,"uniqueVisitors":0,"totalVisits":0,"returningVisits":0,"updatedAt":"..."}
```

### Alternative: bind via wrangler

```bash
cp wrangler.toml.example wrangler.toml
# edit wrangler.toml: replace database_id with the one you copied in step 5
npx wrangler d1 execute portfolio-visitors --remote --file=./schema.sql
npx wrangler pages deploy .
```

`wrangler.toml` is shipped as `.example` on purpose: an incomplete config would
otherwise be picked up by the git-integrated Pages build. Delete the `.example`
suffix only once the `database_id` is real.

### Reading the numbers

```bash
curl -s https://abhipraya.pages.dev/api/stats
```

Reset the counters (local development only - the deployed functions have no
reset route):

```bash
# local dev server
curl -X POST http://127.0.0.1:4173/api/__reset
# Cloudflare - empty the table from the D1 console
DELETE FROM visitors;
```

### Privacy notes

- The table stores exactly three columns: `visitor_id` (a random UUID),
  `first_seen`, `last_seen`, `visit_count`. Nothing else.
- No IP address, no user agent, no referrer, no location, no email, no name.
- The ID is regenerated if `localStorage` is cleared or the cookie expires, and
  a different browser or device always starts a fresh unique visitor.
- Visitors with cookies disabled still work (the id travels in the request
  body), but their id cannot be remembered across page loads.

## Notes

- No live demo buttons are shown because no working deployment was independently verified.
- LinkedIn is intentionally omitted because it was not verified in the supplied CV/source set.
- MLBB Draft Studio, SimpleARPlacement, and Cerberus use real screenshots/diagrams taken from their own source repositories (converted to WebP under `assets/projects/`). SPADA and JogjaLensa have no verified visual asset (no screenshots in their repositories and no live demo URL), so those rows stay text-only rather than showing fabricated imagery.
- The React/Vite scaffold was not installed/built in this sandbox because the npm registry was unreachable from the environment. The static delivery was validated independently with a local HTTP server, file-reference checks, and JavaScript syntax checks.

## Format kode

```bash
npx prettier --write index.html styles.css script.js
```
