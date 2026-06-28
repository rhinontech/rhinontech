---
title: Local development & deploy
description: Scripts, environment variables and how we ship a Rhinon Labs web project.
order: 4
---

## Scripts

```json
"dev":   "next dev",
"build": "next build",
"start": "next start",
"lint":  "eslint"
```

```bash
npm install
npm run dev      # http://localhost:3000
```

## Environment

Public config is exposed with the `NEXT_PUBLIC_` prefix (baked into the client bundle):

```bash title=".env"
NEXT_PUBLIC_API_URL=https://api.rhinontech.in   # shared backend (blogs, case studies, leads, analytics)
NEXT_PUBLIC_SITE_URL=https://rhinonlabs.com      # canonical URLs, OG, sitemap

JWT_SECRET=...                                    # server-only — admin token verification
```

Point `NEXT_PUBLIC_API_URL` at a local backend when developing against one.

## Deploy

- **Vercel** is the default for the web app (auto-detects Next.js — no extra config).
- Backends/services deploy to cloud/containers as the project requires.
- There is **no Docker or CI config** in the reference repo today — see the backlog in
  [Standards & tooling](/rhinon-labs/developers/standards-and-tooling).

## Checklist before handover

- `npm run build` and `npm run lint` are clean.
- Env vars documented in a `.env.example`.
- Content/admin access transferred; secrets rotated to the client's accounts.
- Canonical URL, sitemap and robots verified for the production domain.

:::warning Secrets are the client's
At handover, every key (`JWT_SECRET`, API tokens, provider keys) should live in the **client's**
accounts/secret store — never left pointing at Rhinon Labs infrastructure.
:::
