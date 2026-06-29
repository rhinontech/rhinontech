---
title: Match & adoption
description: The swipe deck, matches, adoption applications and the follow graph.
order: 6
---

## Playdate / match (`/api/playdate`)

```text
GET    /api/playdate/cards          # the swipe deck
POST   /api/playdate/swipe          # like / pass
GET    /api/playdate/matches        # mutual matches
```

A swipe records a row in `playdate_likes` (`swiperId`, `swiperPetId`, `targetPetId`); a mutual like
becomes a match and opens a [chat](/furrcircle/developers/api-reference/community#chat).

```bash
curl https://api.furrcircle.com/api/playdate/swipe \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "swiperPetId": "my-pet", "targetPetId": "their-pet", "action": "like" }'
```

## Adoption (`/api/adoptions`)

```text
POST   /api/adoptions/apply             # submit an application
GET    /api/adoptions/my-applications   # mine
GET    /api/adoptions/received          # applications for my pets
PATCH  /api/adoptions/:id/review        # approve / reject
```

An application is an `adoption_applications` row (`petId`, `applicantId`, `ownerId`, `status`).

## Follows (`/api/follows`)

```text
POST   /api/follows/:id                          # follow
DELETE /api/follows/:id                          # unfollow
GET    /api/follows/requests                     # pending requests
GET    /api/follows/:userId/followers
GET    /api/follows/:userId/following
PATCH  /api/follows/requests/:followerId/accept
PATCH  /api/follows/requests/:followerId/reject
```

:::info Private accounts
For users with `isPrivate = true`, a follow creates a **request** that must be accepted before the
relationship (and their content) is visible.
:::
