---
title: Community
description: Posts, the feed, stories, events and chat — all under /api/community.
order: 4
---

Mounted at `/api/community`.

## Posts & feed

```text
POST   /api/community/posts                 # create
GET    /api/community/feed                   # community feed
GET    /api/community/posts/me               # my posts
GET    /api/community/posts/user/:username   # a user's posts
GET    /api/community/posts/saved            # saved posts
GET    /api/community/posts/:id              # one post
POST   /api/community/posts/:id/like         # toggle like
POST   /api/community/posts/:id/save         # toggle save
POST   /api/community/posts/:id/share
POST   /api/community/posts/:id/comment
DELETE /api/community/comments/:id
PUT    /api/community/posts/me/:id           # edit own
DELETE /api/community/posts/me/:id           # delete own
GET    /api/community/public/posts/:id       # public (no auth)
```

## Stories

```text
GET    /api/community/stories                # stories for your city
GET    /api/community/stories/me
POST   /api/community/stories                # create (24h)
POST   /api/community/stories/:id/view
GET    /api/community/stories/:id/viewers
DELETE /api/community/stories/:id
```

## Events

```text
GET    /api/community/events
GET    /api/community/events/:id
POST   /api/community/events/:id/book
POST   /api/community/events/:id/share
GET    /api/community/public/events/:id      # public
```

## Chat

```text
GET    /api/community/chats                  # conversations
GET    /api/community/chats/:id              # one conversation
POST   /api/community/chats/start            # start a chat
POST   /api/community/chats/:id/messages     # send a message
POST   /api/community/chats/:id/read         # mark read
```

Messages persist (the `messages` table); live delivery/unread badges come over the socket
(`chat:unread`). See [Realtime](/furrcircle/developers/architecture/realtime).

:::tip Posts are moderated
New posts default to `status: "pending"` and surface once approved (admins use
`PATCH /api/admin/post-moderation/:postId`).
:::
