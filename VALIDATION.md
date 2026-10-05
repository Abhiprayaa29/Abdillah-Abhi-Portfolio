# Validation Report

Last updated: 2026-10-05 (evidence & recruiter pass).

## Passed

- Static HTML structure: required sections, skip link, and section order `Proyek → Tentang → Pengalaman → Keahlian → Sertifikat → Kontak`.
- All five project records, the featured-project spotlight, and every case-study dialog interaction are wired (`Buka detail` works from both the spotlight and the rows).
- Every project row follows the mini case-study structure: `Masalah · Stack · Dibangun · Teknis · Hasil` + `Repository` / `Buka detail`.
- All five featured repository links point to the `Abhiprayaa29` GitHub namespace; local asset references resolve.
- JavaScript passes `node --check script.js`.
- Metadata: canonical URL, Open Graph (1200×630 image), Twitter card, JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- Responsive layout at 320 / 375 / 414 / 768 / 1024 / 1440 px in **light and dark**: no horizontal overflow, no tap target under 24px, heading order correct (headless Chromium via CDP).
- Theme behaviour: toggle + live `prefers-color-scheme` switch, `aria-pressed` state, `theme-color` `#ffffff` / `#000000`.
- Mobile menu: body scroll lock while open, Escape closes, auto-closes above 900px.
- Scrollspy: `aria-current` follows the section in view (desktop and mobile nav).
- Print stylesheet: header, menu, and dialog hidden; white background in both themes; reveal animations forced visible.
- Lighthouse (headless Chromium, cold cache): **light 98 / 100 / 100 / 100**, **dark 99 / 100 / 100 / 100** (performance / accessibility / best-practices / SEO); colour-contrast PASS in both themes.
- CV copy is byte-identical to the original materialized source.
- All eight `[ISI: ...]` content placeholders resolved with repository/CV evidence; zero draft markers (`TODO`, `TBD`, `belum diisi`, `placeholder`) remain in `index.html`, `script.js`, `styles.css`.

## Evidence sources used (this pass)

- GitHub READMEs of the five project repositories (test counts, feature lists, honesty notes: `FIXTURE TESTED — GRID LIVE CONNECTION NOT VERIFIED`).
- `cv/Abdillah-Abhi-CV.pdf` (education dates, FTI Cup role, Find IT! UGM 2026 award).

## CV ↔ website notes (reported, not guessed)

- CV headline is design-led ("Kreator Visual & 3D · UI/UX Designer"); the website is software-developer-led. Site kept software evidence; recommend updating the CV headline.
- Website lists engineering skills absent from the CV (React, Express, Socket.IO, Vite, Tailwind, FastAPI, AR Foundation/ARCore, SQL) — all backed by repository stacks.
- CV-only items not shown on the site: Jessup UGM 2026 volunteer role and older high-school PDD roles (curated out).
- CV contains no software project list; the website's five project case studies are the stronger source there.

## Not run

- `npm install` / `npm run build` for `react-vite-source/`: the scaffold is reference-only and the sandbox could not reach the npm registry.

## Delivery decision

The dependency-free static build at the repository root (`index.html` / `styles.css` / `script.js`) is the production site, deployed on Cloudflare Pages at https://abhipraya.pages.dev/.
