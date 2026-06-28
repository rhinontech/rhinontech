---
title: The stack
description: The libraries and versions in our default web stack, and when we reach for Python.
order: 2
---

Our default web project pins a small, deliberate set of dependencies.

## Frontend

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5** (`strict: true`, target ES2017,
  `moduleResolution: bundler`)
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.*` — theme is defined inline
  in `globals.css` with `@theme`)
- **shadcn/ui** (configured in `components.json`) on **Radix UI** primitives
- **lucide-react** icons
- Utilities: **tailwind-merge** + **clsx** (`cn()`), **class-variance-authority** (variants),
  **tw-animate-css**

## Motion & visuals

- **Framer Motion** (`framer-motion` / `motion`) for enter/exit, hover and scroll-reveal
- **@tsparticles** for particle backgrounds (used sparingly)

## Data & auth

- **date-fns** for formatting
- **jose** for JWT verification in admin middleware
- No client DB/ORM — the web app is **headless**, talking to a shared backend API

## Backend (when a project needs one)

- **JavaScript/TypeScript**: Node + Express (see the Rhinon Tech CMS backend) or Next route handlers
- **Python**: FastAPI / Django for data/ML-heavy services
- **PostgreSQL** as the default datastore

## Versioning discipline

- TypeScript **strict** is non-negotiable.
- Prefer the framework's built-ins (Next metadata, fonts, image) over extra libraries.
- Add a dependency only when it removes more complexity than it adds.

:::tip Tailwind v4 note
There's no `tailwind.config.js` in v4 here — design tokens (colours in `oklch`, fonts) live in
`app/globals.css` under `@theme`. Edit tokens there, not in a config file.
:::
