---
title: Overview
description: Conventions for the Furrcircle backend API — base URL, auth, and the route map.
order: 1
---

The backend mounts everything under `/api`.

- **Base URL:** `http://localhost:5001/api` (dev) · `https://api.furrcircle.com/api` (prod)
- **Auth:** `Authorization: Bearer <token>` (`{ id, userType }`) — see
  [Authentication](/furrcircle/developers/architecture/authentication). Most routes require it;
  a few are `optionalAuth` or public.
- **IDs:** UUIDs everywhere.

## Route map

| Area | Mount | Reference |
| --- | --- | --- |
| Auth & profile | `/api/auth` | [Auth](/furrcircle/developers/api-reference/auth) |
| Users | `/api/users` | [Auth](/furrcircle/developers/api-reference/auth) |
| Pets | `/api/pets` | [Pets](/furrcircle/developers/api-reference/pets) |
| Community (posts, stories, events, chat) | `/api/community` | [Community](/furrcircle/developers/api-reference/community) |
| Circles & Q&A | `/api/circles`, `/api/questions` | [Circles & Q&A](/furrcircle/developers/api-reference/circles-and-qa) |
| Match & adoption | `/api/playdate`, `/api/adoptions`, `/api/follows` | [Match & adoption](/furrcircle/developers/api-reference/match-and-adoption) |
| Health & vets | `/api/health`, `/api/appointments`, `/api/vets` | [Health & appointments](/furrcircle/developers/api-reference/health-and-appointments) |
| Lost & found, reminders, notifications, uploads | various | [More](/furrcircle/developers/api-reference/lost-found-notifications-uploads) |
| Admin | `/api/admin` | admin-only moderation/ops |

:::note Source of truth
Paths below are taken from `backend/routes`. They're accurate; confirm request/response bodies in
the route handlers and controllers before depending on them.
:::
