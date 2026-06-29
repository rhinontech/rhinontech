---
title: Data model
description: The core tables behind Saleszium — organizations, chatbots, conversations, tickets and the separate CRM database.
order: 4
---

A map of the main entities. Core app data and CRM data live in **two separate Postgres databases**.

## Core database (`saleszium_beta`)

**`organizations`** — the tenant. Almost everything is scoped by `organization_id`.

**`users`** — `id`, `email`, `password_hash`, `is_onboarded`, `organization_id`. Related:
`users_profiles`, `users_roles` (`current_role`).

**`chatbots`** — `chatbot_id` (6-char public id / `app_id`), `organization_id`, `api_key`,
`chatbot_config` (JSONB), `chatbot_base_url`.

**`support_conversations`** — a human/agent conversation: `user_email`, `chatbot_id`,
`chatbot_history` (the conversation key), `assigned_user_id`, `messages` (JSONB), `is_closed`,
`is_pinned`.

**`bot_conversations`** — a bot/RAG conversation: `conversation_id`, `chatbot_id`, `history` (JSONB).

**`tickets`** — `ticket_id`, `customer_id`, `organization_id`, `assigned_user_id`, `subject`,
`status` (`Open` | `Resolved` | `Closed`), `priority` (`Low` | `Medium` | `High`),
`conversations` (JSONB), `rating`, `tags`.

**`customers`** — `organization_id`, `email`, `custom_data` (JSONB).

**`live_visitors`** — realtime presence: `chatbot_id`, `visitor_id`, `socket_id`, `is_online`,
`last_seen`.

**`subscriptions`** — `subscription_tier` (`Trial` | `Standard` | `Pro`), start/end dates, usage
counters.

**`notifications`** — `organization_id`, `user_id`, `type`, `content` (JSONB), `is_read`.

## CRM database (`saleszium_crm_beta`)

**`peoples`** (contacts) — `organization_id`, `full_name`, `emails`/`phones` (JSONB), `company_id`,
`job_title`, `tags`, `custom_fields` (JSONB).

**`companies`** — `name`, `industry`, `website`, `emails`/`phones`/`addresses` (JSONB),
`custom_fields`.

**`deals`** — `title`, `company_id`, `owner_id`, `value`, `currency`, `probability`, `stage`,
`custom_fields`.

**`pipelines`** — `view_id`, `name`, `stages` (JSONB array of `{ name, order, entities[] }`).

**`groups`** — named collections of CRM entities.

:::tip JSONB everywhere
Custom fields, message threads and pipeline stages are stored as **JSONB**, so the schema flexes
per workspace. Read the model files in `sz-server/models` (and `models/crm_models`) for the exact
shapes.
:::
