---
title: Data model
description: The core Sequelize models and how they relate — users, vets, pets, content and health.
order: 2
---

Models live in `backend/models/` (Sequelize, **UUID** primary keys, timestamps everywhere).

## Actors

**`users`** — `name`, `email`, `phone`, `username` (unique), `role` (`owner` | `shelter` | `admin`),
`isPrivate`, `hasCompletedOnboarding`, `avatar_url`, `bio`, `city`, `latitude`/`longitude`,
`petTypeInterests[]`, `topicInterests[]`.

**`vets`** — `name`, `email`, `username`, `hospital_name`, `profession`, `experience`,
`working_hours`, `isVerified`, `rating`, `licenseNumber`, `clinicStampUrl`.

## Pets & health

**`pets`** — `ownerId`, `name`, `species`, `breed`, `gender`, `birth_date`, `weight`, `city`,
`microchip_id`, `isAdoptionOpen`, `isFosterOpen`, `isBreedingOpen`, `adoptionFee`, `personality`
(JSON).

**`vaccines`** — `petId`, `name`, `dateAdministered`, `nextDueDate`, `veterinarian`,
`hasCertificate`, `certificateUrl`, `addedByRole`.
Plus `medications`, `vitals`, `medical_records`, `allergies`, `reminders` (per pet).

## Social graph & content

- **`posts`** — `userId`, `userType`, `content`, `imageUrl`, `status` (`pending`|`approved`|`rejected`), `city`, `engagementScore`.
- **`stories`** — `mediaUrl`, `mediaType`, `caption`, `city`, `expiresAt` (24h), `viewCount`.
- **`circles`** — `name`, `category`, `createdBy`, `memberCount`, `isPublic` → `circle_members`, `questions`.
- **`questions`** / **`question_answers`** — community Q&A with `upvotes`.
- **`follows`** — `followerId` ↔ `followingId`.
- **`events`** — `organizerId`, `category`, `date`, `location`, `status`.

## Matching & adoption

- **`playdate_likes`** — `swiperId`, `swiperPetId`, `targetPetId` (pet↔pet swipes).
- **`owner_likes`** — `likerId`, `targetId` (owner↔owner, for breeding/fostering).
- **`adoption_applications`** — `petId`, `applicantId`, `ownerId`, `status`.

## Messaging, lost & found, notifications

- **`conversations`** — `initiatorId`/`initiatorType`, `recipientId`/`recipientType`, `petId`.
- **`messages`** — `conversationId`, `senderId`, `senderType`, `text`, `isRead`.
- **`lost_pets`** — `userId`, `imageUrl`, `address`, `status` (`lost` | `spotted`).
- **`notifications`** — `userId`, `userType`, `category` (`activity` | `campaign`), `actionType`, `actionPayload`.
- **`notification_devices`** — `actorId`, `actorType`, `expoPushToken`, `pushEnabled`.

:::note Polymorphic actors
Many tables carry a `(...Id, ...Type)` pair (e.g. `senderId` + `senderType`) because either a
**user** or a **vet** can be the actor. Always check the `*Type` when resolving.
:::
