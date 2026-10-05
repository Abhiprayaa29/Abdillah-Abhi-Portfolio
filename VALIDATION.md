# Validation Report

Last updated: 2026-10-05 (audit + improvement pass).

## Passed

- Static HTML structure: required sections, skip link, and section order `Proyek → Tentang → Pengalaman → Keahlian → Sertifikat → Kontak`.
- All five project records, the featured-project spotlight, and every case-study dialog interaction are wired (`Buka detail` works from both the spotlight and the rows).
- All five featured repository links point to the `Abhiprayaa29` GitHub namespace; local asset references resolve.
- JavaScript passes `node --check script.js`.
- Metadata: canonical URL, Open Graph (1200×630 image), Twitter card, JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- Responsive layout at 320 / 375 / 414 / 768 / 1024 / 1440 px in **light and dark**: no horizontal overflow, no tap target under 24px, heading order correct (headless Chromium via CDP).
- Theme behaviour: toggle + live `prefers-color-scheme` switch, `aria-pressed` state, `theme-color` `#ffffff` / `#000000`.
- Mobile menu: body scroll lock while open, Escape closes, auto-closes above 900px.
- Scrollspy: `aria-current` follows the section in view (desktop and mobile nav).
- Print stylesheet: header, menu, and dialog hidden; white background in both themes; reveal animations forced visible.
- Lighthouse (headless Chromium, cold cache): **light 99 / 100 / 100 / 100**, **dark 99 / 100 / 100 / 100** (performance / accessibility / best-practices / SEO); colour-contrast PASS in both themes.
- CV copy is byte-identical to the original materialized source.
- All eight `[ISI: ...]` content placeholders preserved (4 in `index.html`, 4 in `script.js`).

## Content placeholders still open

Values are intentionally not invented: MLBB tournament/event that used the panel, JogjaLensa real-world usage, SimpleARPlacement test-matrix results, and Cerberus engagement/lab record.

## Not run

- `npm install` / `npm run build` for `react-vite-source/`: the scaffold is reference-only and the sandbox could not reach the npm registry.

## Delivery decision

The dependency-free static build at the repository root (`index.html` / `styles.css` / `script.js`) is the production site, deployed on Cloudflare Pages at https://abhipraya.pages.dev/.
