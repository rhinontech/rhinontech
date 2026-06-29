---
title: Circles & Q&A
description: Local communities and the community question/answer system.
order: 5
---

## Circles (`/api/circles`)

```text
GET    /api/circles                 # all circles
GET    /api/circles/trending
GET    /api/circles/me              # circles I'm in
POST   /api/circles                 # create
GET    /api/circles/:id
PATCH  /api/circles/:id
DELETE /api/circles/:id
POST   /api/circles/:id/join
POST   /api/circles/:id/leave
```

A public read is available at `GET /api/community/public/circles/:id`.

## Q&A (`/api/questions`)

```text
GET    /api/questions               # list
GET    /api/questions/trending
GET    /api/questions/:id
POST   /api/questions               # ask
POST   /api/questions/:id/vote      # upvote
GET    /api/questions/:id/answers
POST   /api/questions/:id/answers   # answer
DELETE /api/questions/:id
```

## Example — ask a question in a circle

```bash
curl https://api.furrcircle.com/api/questions \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "circleId": "circle-uuid",
    "title": "Best vet in Gachibowli?",
    "body": "New to the area — recommendations welcome.",
    "tags": ["vet", "hyderabad"]
  }'
```

:::tip City + circle scoping
Circles are local. A question can belong to a circle (`circleId`) or stand alone; trending uses
upvotes and recency.
:::
