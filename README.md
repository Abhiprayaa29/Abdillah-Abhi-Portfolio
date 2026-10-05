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
- `VALIDATION.md` — current verification results (responsive, accessibility, print, Lighthouse).

## Notes

- No live demo buttons are shown because no working deployment was independently verified.
- LinkedIn is intentionally omitted because it was not verified in the supplied CV/source set.
- MLBB Draft Studio, SimpleARPlacement, and Cerberus use real screenshots/diagrams taken from their own source repositories (converted to WebP under `assets/projects/`). SPADA and JogjaLensa have no verified visual asset (no screenshots in their repositories and no live demo URL), so those rows stay text-only rather than showing fabricated imagery.
- The React/Vite scaffold was not installed/built in this sandbox because the npm registry was unreachable from the environment. The static delivery was validated independently with a local HTTP server, file-reference checks, and JavaScript syntax checks.
