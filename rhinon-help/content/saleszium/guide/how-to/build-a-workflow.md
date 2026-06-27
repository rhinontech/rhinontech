---
title: Build a workflow
description: Create your first automation - auto-assign new leads and send a welcome email, step by step.
order: 3
---

This walkthrough builds a practical automation: when a new lead comes in, assign it to a
salesperson and send a welcome email. It shows the **trigger → conditions → actions** pattern you'll
reuse everywhere.

## The goal

> When a **new lead** is created from the pricing page, **assign** it to a rep and **send** a
> welcome email.

## Steps

1. Open **Automation / Workflows** and create a new workflow.
2. Choose the **trigger**: *new lead created*.
3. Add a **condition**: *source is the pricing page* (so only high-intent leads qualify).
4. Add the first **action**: *assign to* a teammate.
5. Add a second **action**: *send email* - pick or write a welcome message.
6. *(Optional)* Add a **delay**, then a follow-up action a day later.
7. **Activate** the workflow.

## Test it

1. Trigger the event yourself (submit the relevant form, or create a test lead).
2. Confirm the lead is **assigned** and the email is **sent**.
3. Check the workflow's run history.

:::tip Start simple, then extend
Get a one-action workflow working first. Once you trust it, add conditions and extra steps.
:::

## Related

- [Workflow automation](/saleszium/guide/features/workflow-automation) - the full concept.
- [Capture leads with forms](/saleszium/guide/how-to/capture-leads-with-forms) - a common trigger.
