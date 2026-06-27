"use client";

import * as React from "react";
import { ArrowRight, Mail, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Invite-only access screen — UI seam.
 *
 * TODO(backend): replace `handleSubmit` / `handleSso` with calls to the Rhinon
 * auth backend (send magic link / start SSO). On success the backend sets the
 * `rhinon_session` cookie that `src/proxy.ts` checks.
 */
export function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO(backend): POST /auth/magic-link { email }
    await new Promise((r) => setTimeout(r, 650));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-foreground/10 ring-1 ring-border">
          <Check className="size-6 text-foreground" />
        </div>
        <h2 className="font-heading text-xl font-semibold tracking-tight">
          Check your inbox
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
          If <span className="text-foreground">{email}</span> has access, a secure
          sign-in link is on its way.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-11 pl-9 text-sm"
            autoComplete="email"
          />
        </div>
        <Button type="submit" size="lg" disabled={loading} className="h-11 w-full">
          {loading ? "Sending link…" : "Continue with email"}
          {!loading && <ArrowRight />}
        </Button>
      </form>

      <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        className="h-11 w-full"
        onClick={() => {
          /* TODO(backend): start SSO / OIDC flow */
        }}
      >
        <ShieldCheck />
        Continue with SSO
      </Button>

      <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">
        Rhinon Help is private and invite-only. Need access?{" "}
        <a
          href="mailto:access@rhinon.tech"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Request an invite
        </a>
        .
      </p>
    </div>
  );
}
