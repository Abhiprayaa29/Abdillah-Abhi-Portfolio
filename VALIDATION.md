# Validation Report

Last updated: 2026-10-05 (visual evidence pass).

## Passed

- Static HTML structure: required sections, skip link, and section order `Proyek → Tentang → Pengalaman → Keahlian → Sertifikat → Kontak`.
- All five project records, the featured-project spotlight, and every case-study dialog interaction are wired (`Buka detail` works from both the spotlight and the rows).
- Every project row follows the mini case-study structure: `Masalah · Stack · Dibangun · Teknis · Hasil` + `Repository` / `Buka detail`.
- All five featured repository links point to the `Abhiprayaa29` GitHub namespace; local asset references resolve.
- JavaScript passes `node --check script.js`.
- Metadata: canonical URL, Open Graph (1200×630 image), Twitter card, JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- Responsive layout at 320 / 375 / 390 / 430 / 768 / 1024 / 1440 px in **light and dark**: no horizontal overflow, no tap target under 24px, heading order correct (headless Chromium via CDP).
- Theme behaviour: toggle + live `prefers-color-scheme` switch, `aria-pressed` state, `theme-color` `#ffffff` / `#000000`.
- Mobile menu: body scroll lock while open, Escape closes, auto-closes above 900px.
- Scrollspy: `aria-current` follows the section in view (desktop and mobile nav).
- Print stylesheet: header, menu, and dialog hidden; white background in both themes; reveal animations forced visible.
- Lighthouse (headless Chromium, cold cache): **light 98 / 100 / 100 / 100**, **dark 99 / 100 / 100 / 100** (performance / accessibility / best-practices / SEO); colour-contrast PASS in both themes.
- CV copy is byte-identical to the original materialized source.
- All eight `[ISI: ...]` content placeholders resolved with repository/CV evidence; zero draft markers (`TODO`, `TBD`, `belum diisi`, `placeholder`) remain in `index.html`, `script.js`, `styles.css`.
- Hero headline replaced with the exact requested copy ("Halo, saya Abdillah Abhi. Software developer yang mengintegrasikan perancangan UI/UX intuitif, rekayasa web full-stack, serta standar keamanan aplikasi yang solid."); long-word overflow fixed at 320px (`overflow-wrap: break-word`).
- Real, verified project screenshots added: featured card (MLBB control panel, exact 16:10), project rows for MLBB / SimpleARPlacement / Cerberus (zero-crop via natural-height figures), and dialog visuals in `title → visual → content` order. Dialog gallery is a plain CSS grid (MLBB 4 images, Cerberus 3); single-image dialogs center the image; JogjaLensa/SPADA dialogs hide the visual block (no verified asset).
- All new images are WebP with explicit `width`/`height`; featured image is below the fold and uses `fetchpriority="low"` so it never competes with the LCP element. No crop, no `object-fit: cover` in rows, no fabricated imagery.
- Dialog keyboard behaviour: opening moves focus to the close button, Escape closes, focus returns to the triggering row button (verified via real CDP mouse click + key dispatch).
- Lighthouse re-verified after the visual pass (headless Chromium, cold cache): **light 98 / 100 / 100 / 100**, **dark 99 / 100 / 100 / 100** — identical to the pre-visual baseline.

## Evidence sources used (this pass)

- GitHub READMEs of the five project repositories (test counts, feature lists, honesty notes: `FIXTURE TESTED — GRID LIVE CONNECTION NOT VERIFIED`).
- `cv/Abdillah-Abhi-CV.pdf` (education dates, FTI Cup role, Find IT! UGM 2026 award).

### Visual asset provenance (this pass)

- **MLBB Draft Studio** — 4 of 11 Playwright test-report screenshots from a local clone of the repository (`scripts/report/`), converted to WebP: control-panel-operator (featured), control-panel-grid, overlay-draft (row), overlay-score (dialog gallery).
- **SimpleARPlacement** — `Docs/SimpleARPlacement/Screenshots/05_template_ui.png` from the repository (the AR "Tap to Place" screen; same content as the previously used photo, now at full portrait resolution).
- **Cerberus** — repository assets from branch `dev`: `.github/assets/orchestrator-atlas.png` (row/dialog), `packages/web/public/images/core-loop.png` and `ultrawork-flow.png` (dialog gallery).
- **bot_spada** — no screenshots exist in the repository (code-only). Row and dialog are text-only.
- **JogjaLensa / ProjectPemogramanWeb-Abdillah-Abhi** — only category/content photos in the repository, no UI screenshots, no live URL, no local PHP runtime. Row and dialog are text-only.
- Every used image was opened and visually inspected: no tokens, keys, personal data, or third-party branding misuse. One cropped `cdn.simpleicons.org` URL fragment in a test screenshot is the only external reference (icon CDN, no secret).
- New assets total ≈468 KB across `assets/projects/{mlbb,ar,cerberus}/`; all referenced files resolve (static reference check).

## CV ↔ website notes (reported, not guessed)

- CV headline is design-led ("Kreator Visual & 3D · UI/UX Designer"); the website is software-developer-led. Site kept software evidence; recommend updating the CV headline.
- Website lists engineering skills absent from the CV (React, Express, Socket.IO, Vite, Tailwind, FastAPI, AR Foundation/ARCore, SQL) — all backed by repository stacks.
- CV-only items not shown on the site: Jessup UGM 2026 volunteer role and older high-school PDD roles (curated out).
- CV contains no software project list; the website's five project case studies are the stronger source there.

## Not run

- `npm install` / `npm run build` for `react-vite-source/`: the scaffold is reference-only and the sandbox could not reach the npm registry.

## Delivery decision

The dependency-free static build at the repository root (`index.html` / `styles.css` / `script.js`) is the production site, deployed on Cloudflare Pages at https://abhipraya.pages.dev/.
