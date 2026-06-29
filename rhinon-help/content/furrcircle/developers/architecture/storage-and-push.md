---
title: Storage & push
description: How media uploads (S3) and push notifications (FCM) work.
order: 4
---

## Media uploads (AWS S3)

Uploads go through `backend/services/s3Service.ts` with Multer (in-memory). Files are keyed by type:

```text
{FOLDER_NAME}/{type}/{uuid}.{ext}
→ https://{bucket}.s3.{region}.amazonaws.com/{key}
```

Upload endpoints:

```text
POST /api/upload/stories       # image OR video, up to 200 MB
POST /api/upload/:folder       # image up to 10 MB (posts allow video)
```

Valid `:folder` values: `profiles`, `pets`, `posts`, `events`, `stamps`, `reports`,
`certificates`, `stories`, `memories`, `circles`, `chats`.

The flow is usually: **upload → get the S3 URL → save that URL** on the resource (e.g. `avatar_url`,
`imageUrl`, `mediaUrl`).

## Push notifications (Firebase)

Push is handled in `backend/services/notificationService.ts`; Firebase is initialised in
`config/firebase.ts` (loads `google-services.json`).

- Devices register via `POST /api/notifications/devices/register` storing `expoPushToken`,
  `installationId`, `pushEnabled` in `notification_devices`.
- Two notification **categories**: `activity` (transactional — always sent) and `campaign`
  (marketing — respects the user's preference).
- A separate dispatch path handles **chat** alerts.
- Payloads carry `category`, `actionType`, `actionPayload` (JSON) for deep-linking, plus
  `title`/`body` and platform-specific (APNs/Android) blocks.

Unread counts are emitted over the socket (`notification:counts`) so badges stay live without
polling.

:::warning Respect campaign consent
Only `activity` notifications are unconditional. `campaign` sends must check the user's notification
preferences (`GET/PATCH /api/notifications/preferences`).
:::
