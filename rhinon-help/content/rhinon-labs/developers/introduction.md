---
title: Engineering Handbook
description: How Rhinon Labs builds software — the default stack, project conventions, and standards we apply on every engagement.
order: 1
featured: true
---

This is the **internal engineering handbook** for Rhinon Labs. It captures how we build: the default
stack we reach for, how we structure projects, and the standards we hold across client work.

:::info Internal & private
For the Rhinon Labs team and trusted contributors. The [public guide](/rhinon-labs/guide/introduction)
explains *what* we do; this section is *how* we do it.
:::

## Principles

- **Pick the right stack, lean on a strong default.** We're stack-flexible (JS/TS and Python), but
  most product work starts from a shared, well-worn default so we move fast and stay consistent.
- **Ship to production.** Design → build → deploy → support, end to end. Code we hand over is owned,
  documented and runnable by the client.
- **Pragmatic, not heavy.** Simplicity, performance and SEO over ceremony. We add process where it
  earns its keep.

## The default web stack

Our reference implementation (the Rhinon Labs site itself) is the canonical example:

| Concern | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router) |
| UI | **React 19** + **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** + **shadcn/ui** |
| Motion | **Framer Motion** |
| Auth (admin) | **jose** (JWT) middleware |
| Backend | Headless — a shared API (`api.rhinontech.in`); Python (FastAPI/Django) where needed |
| Hosting | **Vercel** (web), cloud/containers for services |

## Read next

1. [The stack](/rhinon-labs/developers/stack) in detail
2. [Project structure & conventions](/rhinon-labs/developers/project-structure)
3. [Local development](/rhinon-labs/developers/local-development)
4. [Backend integration](/rhinon-labs/developers/backend-integration),
   [SEO & analytics](/rhinon-labs/developers/seo-and-analytics),
   [auth & admin](/rhinon-labs/developers/auth-and-admin)
5. [Standards & tooling](/rhinon-labs/developers/standards-and-tooling)

:::note A living document
This handbook reflects current practice (and the rhinonlabs codebase). Treat the gaps called out in
[Standards & tooling](/rhinon-labs/developers/standards-and-tooling) as our improvement backlog.
:::
