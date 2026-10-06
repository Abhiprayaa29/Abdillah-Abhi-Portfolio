-- Visitor tracking schema (Cloudflare D1)
--
-- Apply with:
--   npx wrangler d1 execute portfolio-visitors --remote --file=./schema.sql
-- or from the Cloudflare dashboard: Workers & Pages > portfolio-visitors > Query > paste this file.
--
-- Privacy: this table stores an anonymous, client-generated UUID only.
-- No IP address, no user agent, no cookie value beyond the UUID, no personal data.

CREATE TABLE IF NOT EXISTS visitors (
  visitor_id  TEXT PRIMARY KEY NOT NULL,
  first_seen  INTEGER NOT NULL,
  last_seen   INTEGER NOT NULL,
  visit_count INTEGER NOT NULL DEFAULT 1
);
