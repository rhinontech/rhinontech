---
title: Lost & found, reminders, notifications, uploads
description: The remaining resources — lost pets, reminders, notifications and media uploads.
order: 8
---

## Lost & found (`/api/lost-pets`)

```text
GET    /api/lost-pets              # list (lost / spotted)
POST   /api/lost-pets             # report
PUT    /api/lost-pets/:id         # update status
DELETE /api/lost-pets/:id
```

A report has `imageUrl`, `address`, `description`, `status` (`lost` | `spotted`).

## Reminders (`/api/reminders`)

```text
GET    /api/reminders
POST   /api/reminders
PUT    /api/reminders/:id
DELETE /api/reminders/:id
PATCH  /api/reminders/:id/toggle   # mark done / undone
```

`type` is `general` | `vaccine` | `medication` | `appointment`; `recurrence` is
`none` | `daily` | `weekly` | `monthly`. Vaccine/appointment reminders can link back to the source.

## Notifications (`/api/notifications`)

```text
GET    /api/notifications
GET    /api/notifications/unread-counts
GET    /api/notifications/preferences
PATCH  /api/notifications/preferences
PATCH  /api/notifications/read-all
PATCH  /api/notifications/:id/read
POST   /api/notifications/devices/register     # expoPushToken
PATCH  /api/notifications/devices/push-enabled
DELETE /api/notifications/devices/:installationId
```

See [Storage & push](/furrcircle/developers/architecture/storage-and-push) for how FCM delivery and
the `activity` vs `campaign` categories work.

## Uploads (`/api/upload`)

```text
POST   /api/upload/stories        # image/video up to 200 MB
POST   /api/upload/:folder        # image up to 10 MB (posts allow video)
```

Returns the S3 URL to save on the resource. Valid folders: `profiles`, `pets`, `posts`, `events`,
`stamps`, `reports`, `certificates`, `stories`, `memories`, `circles`, `chats`.

:::tip Upload, then attach
Uploads are decoupled from resources: upload first, then send the returned URL when you create/update
the post, pet, story, etc.
:::
