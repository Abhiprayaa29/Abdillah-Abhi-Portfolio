# Validation Report

Last updated: 2026-10-05 (visual evidence pass + rotating featured spotlight + public repository index).

## Passed

- Static HTML structure: required sections, skip link, and section order `Proyek → Tentang → Pengalaman → Keahlian → Sertifikat → Repository → Kontak`.
- All five project records, the rotating featured spotlight, and every case-study dialog interaction are wired (`Buka detail` works from both the spotlight and the rows, on whichever slide is showing).
- Every project row follows the mini case-study structure: `Masalah · Stack · Dibangun · Teknis · Hasil` + `Repository` / `Buka detail`.
- All five featured repository links point to the `Abhiprayaa29` GitHub namespace; local asset references resolve.
- Sertifikat section lists six entries: two Find IT! 2026 awards (Finalis UX Competition, Best Video — KMTETI · FT UGM, Mei 2026) above the four Dicoding certificates. Every row links to a real file under `assets/sertifikat/`; the four Dicoding rows also carry their public verification URLs. Neither Find IT! certificate exposes a verification URL, so those rows link to the source file only (no invented link).
- Repository section lists **all 12 public GitHub repositories** grouped into four domain buckets — `Aplikasi, web & AR` (3), `AI, bot & otomasi` (3), `Riset, data & keamanan` (4), `Profil` (2) — each group ordered by last update descending. Every row shows the repository name, its README/API description, the primary language (omitted when GitHub reports none), the last-update month in Indonesian, and a star count only where GitHub actually reports one (`autosync-git`, ★1). The five repositories with a case study on the site add a `Studi kasus` button that opens the existing dialog; the other seven show the link alone. All 12 links are unique, point at `https://github.com/Abhiprayaa29/…`, and carry `target="_blank" rel="noreferrer"`. No private repository, no fork, no invented metric — data taken from the GitHub API and each repository README.
- Desktop navigation now holds seven links and still fits without overlap or clipping at 901 / 960 / 1024 / 1440 px (measured brand-right vs nav-left and nav-right vs actions-left, plus `scrollWidth` vs `clientWidth` on the nav element).
- JavaScript passes `node --check script.js`.
- Metadata: canonical URL, Open Graph (1200×630 image), Twitter card, JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- Responsive layout at 320 / 375 / 390 / 430 / 768 / 1024 / 1440 px in **light and dark**: no horizontal overflow, no tap target under 24px, heading order correct (headless Chromium via CDP). The repository section fits at 320 px as a single column with every tap target ≥24px.
- Theme behaviour: toggle + live `prefers-color-scheme` switch, `aria-pressed` state, `theme-color` `#ffffff` / `#000000`.
- Mobile menu: body scroll lock while open, Escape closes, auto-closes above 900px.
- Scrollspy: `aria-current` follows the section in view (desktop and mobile nav), verified for **all seven sections** by instant-scrolling to each one. Fixed a pre-existing bug where the final section could never become active on viewports taller than ~770 px: the activation line (`52px + 30% of viewport height`) always sat above `#contact`'s resting position at maximum scroll, so `Kontak` stayed unhighlighted (before the repository section existed, the last highlighted item was `Sertifikat`). The page is now treated as active on the last section once it is within 4 px of the bottom.
- Section background alternation restored across the full page: `alt → plain → alt → plain → alt → plain → alt` (`#projects` … `#contact`, which gained `sec-alt` to make room for the new plain `#repositories` block).
- Print stylesheet: header, menu, and dialog hidden; white background in both themes; reveal animations forced visible; `.repo-item` and `.repo-group` added to the `break-inside: avoid` list so a repository entry never splits across pages.
- Lighthouse (headless Chromium, cold cache, repeated runs): **light 93–98 / 100 / 100 / 100**, **dark 98 / 100 / 100 / 100** (performance / accessibility / best-practices / SEO). The 93 is the first run immediately after a cold server restart (LCP 3.0 s); subsequent runs settle at 97–98 (LCP 2.0 s), at or above the 95 target. Colour-contrast PASS in both themes; CLS 0.04 light / 0.04 dark.
- CV copy is byte-identical to the original materialized source.
- All eight `[ISI: ...]` content placeholders resolved with repository/CV evidence; zero draft markers (`TODO`, `TBD`, `belum diisi`, `placeholder`) remain in `index.html`, `script.js`, `styles.css`.
- Hero headline replaced with the exact requested copy ("Halo, saya Abdillah Abhi. Software developer yang mengintegrasikan perancangan UI/UX intuitif, rekayasa web full-stack, serta standar keamanan aplikasi yang solid."); long-word overflow fixed at 320px (`overflow-wrap: break-word`).
- Real, verified project screenshots added: project rows for MLBB / SimpleARPlacement / Cerberus and dialog visuals in `title → visual → content` order. Every row image sits in an identical 16:9 framed canvas (`aspect-ratio` + `object-fit: contain`, zero crop) so the project list keeps one uniform rhythm; portrait screenshots center on the canvas on desktop and show full-height on mobile. Dialog gallery is a plain CSS grid (MLBB 4 images, Cerberus 3); single-image dialogs center the image; JogjaLensa/SPADA dialogs hide the visual block (no verified asset). The featured spotlight intentionally carries no screenshot — its image moved to the project row — which is what lets all five projects rotate through it.
- All images are WebP with explicit `width`/`height`; no crop, no `object-fit: cover` in rows, no fabricated imagery.
- Dialog keyboard behaviour: opening moves focus to the close button, Escape closes, focus returns to the triggering row button (verified via real CDP mouse click + key dispatch).
- Featured spotlight rotates through all five projects so MLBB is no longer the only one shown: auto-advance every 7 s, five dot indicators, prev/next arrow buttons, and touch swipe left/right, all cyclic; auto-advance pauses on hover, on focus inside the card, and while the tab is hidden. `prefers-reduced-motion` removes the fade and stops auto-advance. Arrow targets are 40×40 and dots 24×24 (measured at 320–1440 px), and `touch-action: pan-y` keeps vertical page scrolling intact while a horizontal swipe changes slides.
- Scroll reveal uses `rootMargin: 0 0 -30px 0` with `threshold: 0`, so a very tall block (the project list, ~3400 px) reveals as soon as it enters that zone instead of waiting for 6% of its own height. Audit confirms `reveal-unfired-in-viewport => 0` when scrolled to `#projects`.

## Evidence sources used (this pass)

- GitHub READMEs of the five project repositories (test counts, feature lists, honesty notes: `FIXTURE TESTED — GRID LIVE CONNECTION NOT VERIFIED`).
- GitHub REST API (`users/Abhiprayaa29/repos`) plus each of the 12 repository READMEs for the repository index: name, description, primary language, `pushed_at`, `stargazers_count`, `fork: false`. Private repositories are excluded by the API's default scope; none were requested or added.
- `cv/Abdillah-Abhi-CV.pdf` (education dates, FTI Cup role, Find IT! UGM 2026 award).
- Original certificate files in `Documents\Sertif\` (Find IT! 2026 e-certificate PDF and the Best Video image); both inspected — no tokens, keys, or personal data beyond the awardee name already published on the site.

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
