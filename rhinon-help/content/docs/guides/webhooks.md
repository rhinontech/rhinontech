---
title: Webhooks
description: Receive real-time events, verify signatures and handle retries.
order: 2
---

# Webhooks

Webhooks push events to your endpoint the moment something happens in Rhinon — no polling
required. This guide covers subscribing, verifying authenticity and handling delivery
retries.

## Subscribe to events

Register an endpoint and the events you care about:

```ts showLineNumbers
await rhinon.webhooks.create({
  url: "https://acme.app/hooks/rhinon",
  events: ["project.created", "deploy.succeeded", "deploy.failed"],
});
```

## Verify signatures

Every delivery is signed. Verify the `Rhinon-Signature` header before trusting a payload:

```ts title="hooks/rhinon.ts" {6-9} showLineNumbers
import { verifyWebhook } from "@rhinon/sdk";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Rhinon-Signature")!;

  const event = verifyWebhook(body, signature, process.env.RHINON_WEBHOOK_SECRET!);
  // Throws if the signature is invalid — request is authentic past this line.

  switch (event.type) {
    case "deploy.succeeded":
      // ...
      break;
  }
  return new Response("ok");
}
```

:::danger Always verify
An unverified endpoint can be spoofed by anyone who learns its URL. Never act on a payload
before `verifyWebhook` succeeds.
:::

## Retries

Failed deliveries (any non‑2xx response) are retried with exponential backoff for up to 24
hours. Make your handler **idempotent** — the same event may arrive more than once.

| Attempt | Delay |
| --- | --- |
| 1 | immediate |
| 2 | 1 minute |
| 3 | 30 minutes |
| 4 | 2 hours |
