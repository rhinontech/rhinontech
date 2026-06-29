---
title: SEO & analytics
description: Our metadata, structured data, robots/sitemap and first-party cookieless analytics.
order: 6
---

SEO and lightweight analytics are part of every build, not an afterthought.

## Metadata

- Root `metadata` in `app/layout.tsx`: title template (`"%s | Rhinon Labs"`), keywords, Open Graph,
  Twitter `summary_large_image`, robots `index/follow`, and geo tags.
- Per-page `generateMetadata()` on detail routes (`blogs/[slug]`, `case-studies/[slug]`) using the
  item's title/description/image.

## Structured data (JSON-LD)

`components/Common/SEO/StructuredData.tsx` injects schema.org JSON-LD — **Organization**, **Service**
and **FAQ** schemas — so search engines understand the business.

## Robots & sitemap

- `app/robots.ts` — allow `/`, disallow `/admin` and `/api`.
- `app/sitemap.ts` — the public routes with change frequency + priority.

## First-party analytics

We run our own **cookieless** pageview tracking (`lib/analytics.ts` +
`components/Common/Analytics/PageviewTracker.tsx`) — no third-party scripts, no cookies:

- **Visitor id** in `localStorage` (`rl_vid`), **session id** in `sessionStorage` (`rl_sid`).
- On route change, POST `{ visitorId, sessionId, path, title, referrer, utm* }` to `/public/track`.
- Falls back to `navigator.sendBeacon` if `fetch` fails; degrades silently in private mode.
- The tracker is wrapped in `<Suspense>` so analytics never block render.

:::tip Privacy by default
No PII, no cookies, graceful degradation. This keeps us light on consent requirements while still
giving the client real traffic insight via their own backend.
:::
