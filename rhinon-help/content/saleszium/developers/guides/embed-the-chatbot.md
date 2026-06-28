---
title: Embed the chatbot
description: Add the Saleszium chat widget to any site with the bot SDK — vanilla JS, React and Next.js.
order: 1
featured: true
---

The chat widget ships as the **`rhinontech`** SDK (also published as `@saleszium/botsdk`). It renders
a `<chat-bot>` web component (Shadow DOM, so it won't clash with your styles) and connects to your
`sz-server`.

## Install

```bash
npm install @saleszium/botsdk
# or: npm install rhinontech
```

You only need your chatbot's **`app_id`** — the 6-character id from
`GET /api/chatbot/chatbots` (or the dashboard).

## Vanilla JS

```ts
import Rhinontech from "@saleszium/botsdk";

document.addEventListener("DOMContentLoaded", () => {
  Rhinontech({
    app_id: "OS9BTL",
    chatbot_config: { isBgFade: true },
  });
});
```

A script-tag build is also exposed on `window` as `Rhinontech` / `SalesziumBot`.

## React

```tsx
import { useEffect } from "react";
import Rhinontech from "@saleszium/botsdk";

export function Chatbot() {
  useEffect(() => {
    Rhinontech({ app_id: "YOUR_APP_ID", chatbot_config: { isBgFade: true } });
  }, []);
  return null;
}
```

## Next.js (App Router)

The SDK touches `window`, so load it client-side only:

```tsx
"use client";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

export default function ChatbotWrapper() {
  return <Chatbot />;
}
```

Render `<ChatbotWrapper />` once in your root layout.

## Options

```ts
interface RhinontechConfig {
  app_id: string;          // required — 6-char chatbot id
  admin?: boolean;         // admin/preview mode
  container?: HTMLElement;  // mount into a custom element instead of floating
  chatbot_config?: {
    isBgFade?: boolean;    // dim the page behind the open widget
  };
}
```

`Rhinontech(config)` returns the `<chat-bot>` element; call `element.setConfig(next)` to update it
at runtime.

:::tip Custom mount point
Pass `container` to embed the bot inline (e.g. inside a help panel) instead of as a floating bubble.
:::
