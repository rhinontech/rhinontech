---
title: Project structure & conventions
description: How we lay out a Next.js project and the naming/component conventions we follow.
order: 3
---

A consistent layout means anyone on the team can navigate any project. The Rhinon Labs site is the
template.

## Directory layout

```text
app/                # Next.js App Router (routes, layout, metadata, robots, sitemap)
  layout.tsx        # fonts, root metadata, analytics, StructuredData
  page.tsx          # home
  blogs/  case-studies/  contact-us/  _admin/  login/
  robots.ts  sitemap.ts  globals.css
components/
  ui/               # shadcn/ui primitives (button, input, label, textarea)
  Common/           # shared: Header, Footer, FAQ, CTA, SEO, Analytics, Markdown
  Pages/            # page-specific compositions (Pages/Home, Pages/ContactUs, ...)
lib/
  api.ts            # typed API client (getBlogs, getCaseStudies, ...)
  analytics.ts      # first-party pageview tracking
  utils.ts          # cn() helper
public/             # static assets
proxy.ts            # JWT middleware (admin gating)
```

## Conventions

- **Files:** kebab-case (`case-studies.tsx`, `lead-magnet.tsx`).
- **Components:** PascalCase named/default exports (`export function Header()`).
- **Imports:** the `@/*` path alias maps to the project root (`@/components`, `@/lib`).
- **Component tiers:** `ui/` (primitives) → `Common/` (shared) → `Pages/` (page compositions).
- **Props:** every component has a typed `interface` for its props.
- **Styling:** Tailwind classes + `cn()` for conditionals; variants via CVA.

## Rendering patterns

- **List pages** are async **server components** that fetch data, often with
  `export const dynamic = "force-dynamic"` when content must be fresh.
- **Detail pages** (`[slug]`) add a `generateMetadata()` for per-page SEO.
- **Interactive bits** (forms, trackers) are `"use client"` and kept small.
- **Markdown** is rendered by a lightweight in-house `<MarkdownRenderer>` (headings, lists, bold,
  blockquotes, code, line breaks) — no heavy markdown library.

:::tip Keep client components thin
Default to server components. Reach for `"use client"` only for forms, state and browser APIs, and
keep those leaves small so most of the tree stays server-rendered.
:::
