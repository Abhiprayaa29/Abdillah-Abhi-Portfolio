# Validation Report

## Passed
- Static HTML structure and required sections checked.
- All five featured project records and case-study interactions are wired.
- All five featured repository links point to the `Abhiprayaa29` GitHub namespace.
- Local asset references resolve.
- JavaScript passes `node --check script.js`.
- CV copy is byte-identical to the original materialized source.
- Static HTTP serving smoke-tested for HTML, CSS, JS, favicon, and CV PDF.

## Not run / blocked
- `npm install` / `npm run build` for the React/Vite scaffold: the sandbox could not reach the npm registry (DNS/network error), so dependencies could not be installed.
- Automated Chromium visual rendering: the environment browser policy returned `ERR_BLOCKED_BY_ADMINISTRATOR` for local page navigation. No false browser-test pass is claimed.

## Delivery decision
The dependency-free static build is the final directly runnable delivery. The React/Vite/Tailwind source scaffold is included separately for a normal development environment where npm dependencies can be installed.
