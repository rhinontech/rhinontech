---
title: Standards & tooling
description: Linting, TypeScript strictness, and the testing/CI gaps we're closing.
order: 8
---

What we enforce today, and what we're improving.

## In place

- **ESLint** (flat config, `eslint.config.mjs`) extending `next/core-web-vitals` + `next/typescript`.
  Run with `npm run lint`.
- **TypeScript strict** (`strict: true`, `noEmit`, `isolatedModules`) — type errors block the build.
- **Next.js build checks** — `next build` type-checks and catches RSC/route issues.
- **Conventions** — the structure and naming in
  [Project structure](/rhinon-labs/developers/project-structure).

## Gaps (our backlog)

These are honestly absent in the reference repo and worth adding per project:

| Gap | Recommendation |
| --- | --- |
| **No tests** | Add **Vitest** + **React Testing Library** for logic/components; Playwright for critical flows. |
| **No CI** | A **GitHub Actions** workflow running `lint` + `build` (+ tests) on every PR. |
| **No Prettier config** | Add `prettier` + `eslint-config-prettier` so formatting isn't a review topic. |
| **No pre-commit hooks** | **husky** + **lint-staged** to lint/format staged files. |
| **No Docker** | A `Dockerfile` for backends/services that aren't on Vercel. |

## Definition of done

A feature is done when:

1. It's typed (no `any` escapes), and `lint` + `build` pass.
2. It's responsive and accessible (semantic HTML, labels, contrast).
3. SEO metadata is set for new routes.
4. Env/config changes are reflected in `.env.example`.
5. It's reviewed by another engineer.

:::tip Raise the floor gradually
Adopt the backlog incrementally — Prettier + a CI `lint`/`build` check are the highest-leverage first
steps and take an afternoon to wire up.
:::
