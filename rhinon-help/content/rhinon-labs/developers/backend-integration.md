---
title: Backend integration
description: Our headless pattern — typed API client, the shared public endpoints, and forms.
order: 5
---

Rhinon Labs sites are **headless**: the frontend renders, a separate API owns data. The Rhinon Labs
site talks to the shared Rhinon Tech backend (`api.rhinontech.in`).

## The API client (`lib/api.ts`)

A single typed `getJSON<T>()` helper wraps `fetch`, and feature functions build on it:

```ts
const API = process.env.NEXT_PUBLIC_API_URL ?? "https://api.rhinontech.in";

async function getJSON<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export const getBlogs = () => getJSON<Blog[]>("/public/blogs");
export const getBlog = (slug: string) =>
  getJSON<Blog>(`/public/blogs/${encodeURIComponent(slug)}`);
export const getCaseStudies = () => getJSON<CaseStudy[]>("/public/case-studies");
```

Conventions: **`cache: "no-store"`** (always fresh), return `null` on error, and callers default to
empty arrays so a failed fetch degrades gracefully instead of crashing the page.

## Shared public endpoints

| Endpoint | Use |
| --- | --- |
| `GET /public/blogs`, `/public/blogs/:slug` | blog list + detail |
| `GET /public/case-studies`, `/public/case-studies/:slug` | case studies |
| `POST /public/web-leads` | contact-form submissions |
| `POST /public/track` | first-party analytics |

## Forms

Forms are small client components that POST to the backend and manage their own loading/success/error
state. The contact form (`components/Pages/ContactUs`) submits `{ name, email, whatsapp, company,
message }` to `POST /public/web-leads`, resets on success, and shows inline status.

:::tip Type the API at the boundary
Define an `interface` for every payload (e.g. `Blog`, `CaseStudy`) in `lib/api.ts`. That one file is
the contract between the headless backend and the whole frontend.
:::
