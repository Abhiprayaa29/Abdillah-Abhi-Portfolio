# Portfolio Engineering Audit

**Date:** 2026-11-15
**Production URL:** <https://abhipraya29.my.id/>
**Repository:** `Abdillah-Abhi-Portfolio`

## Scope and baseline

The deployed site is the dependency-free static application in the repository root: `index.html`, `styles.css`, and `script.js`, with Cloudflare Pages Functions under `functions/api/`. `react-vite-source/` is a separate reference/scaffold and is not the production entry point. Deployment configuration was not changed. The working tree contained pre-existing untracked `.hallmark/` and `anti-slop/` directories; they were left untouched.

The site already has a distinctive designer × coder identity, editorial split hero, light/dark themes, mobile navigation, project filters and case-study dialogs, video and certificate galleries, Shelves article reader, experience and skills sections, contact actions, and optional first-party visit statistics. Existing layout, project ordering, and visual assets were treated as constraints.

## Strengths

- Clear designer × coder positioning and a recognizable editorial composition.
- Useful project detail dialogs, with repository links and supporting project imagery where available.
- Core site works without a frontend runtime or added third-party JavaScript dependencies.
- Images use responsive formats in several places; non-critical content commonly uses lazy loading.
- Theme switching, mobile navigation, keyboard focus styling, and reduced-motion handling already exist.
- Previous validation records include responsive, accessibility, and performance checks. Those historical results are not treated as verification of the current working tree.

## Findings

### P0 — credibility and accessible interaction

1. The project filter container used `role="tablist"` without tab roles, arrow-key tab behavior, or selected state. Its controls behave as ordinary filter buttons, so the tab pattern was misleading to assistive technology.
2. Both modal dialogs labelled themselves using their close buttons. When content was injected, the article title was not connected as the dialog's accessible name.
3. The footer initially said “Verified Deployment” while the script asynchronously tried to fetch visit statistics. That phrase implied a verification the page did not perform.
4. The canonical URL and Open Graph URLs use `abhipraya29.my.id`, while `robots.txt` and `sitemap.xml` pointed crawlers to `abhipraya.pages.dev`.

### P1 — content and storytelling

- The current modal case studies already provide overview-like copy, problem, contribution, architecture/design where present, challenges, outcomes, visual artifacts, stack, and a repository link. They do not consistently expose explicit test evidence, limitations, or implementation status for every project. Those claims should only be expanded after checking each project source and confirming owner role/status.
- Experience is a single editorial timeline with project, academic, and competition entries; it is not divided into separate category headings. Dates and claims remain owner-verification items where evidence is not present in this portfolio repository.
- Skills are grouped by discipline and list tools but do not consistently link each tool to its verified project. A technology explorer could help, but accurate mapping needs a checked project metadata source.
- Shelves already includes search, categories, and article dialogs. Estimated reading time, updated dates, related articles, and a table of contents are not present; do not fabricate publication metadata or article content.

### P2 — performance, maintainability, and features

- The root application has no package-based production build. Its production artifact is the static root files plus Pages Functions. The React/Vite scaffold must not be mistaken for the deployed site.
- Existing local videos are relatively large. They are intentionally retained as-is under the earlier asset-preservation instruction; no 54 MB file was added.
- Optional developer console, technology explorer, and new scroll-driven effects are not necessary for core usability. The swarm cursor experiment was previously reverted at the owner's request and should remain absent unless explicitly requested again.
- The repository contains extensive historical validation records, but those are not a substitute for rerunning browser checks against this exact revision.

## Implementation priorities

1. Correct filter and dialog semantics without changing their visual layout.
2. Remove unsupported “verified deployment” wording and align crawl URLs with the canonical domain.
3. Keep project claims tied to evidence and record remaining owner-verification items.
4. Defer visual or interactive expansion until browser-based regression checks and project-level evidence mapping are available.

## Audit limitations

Repository inspection covered the production root, API function paths, asset inventory, existing validation docs, SEO metadata, interaction code, and Git state. The attached brief requested live inspection at 1440, 1280, 768, 390, and 360 px. A browser automation/runtime was not available in this session, so no new screenshots, viewport interaction checks, or visual before/after comparison are claimed. External links were not exhaustively tested. See `PORTFOLIO_IMPLEMENTATION_REPORT.md` for checks actually run.
