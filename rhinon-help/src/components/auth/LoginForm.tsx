"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Email-only access screen for the developer docs.
 *
 * Posts the email to `/api/auth/login`, which checks it against the backend
 * allowlist and (on success) sets the session cookie. We then continue to the
 * page the visitor was trying to reach.
 */
export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const fromParam = params.get("from");
  const from = fromParam && fromParam.startsWith("/") ? fromParam : "/";

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        router.replace(from);
        router.refresh();
      } else {
        setError(data.message || "Unable to sign in.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="you@company.com"
            className="h-11 pl-9 text-sm"
            autoComplete="email"
            autoFocus
          />
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" disabled={loading} className="h-11 w-full">
          {loading ? "Checking access…" : "Continue with email"}
          {!loading && <ArrowRight />}
        </Button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">
        The developer docs are private and invite-only. Need access?{" "}
        <a
          href="mailto:access@rhinon.tech"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Request access
        </a>
        .
      </p>
    </div>
  );
}
