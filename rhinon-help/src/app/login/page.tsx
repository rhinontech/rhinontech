import type { Metadata } from "next";
import { Suspense } from "react";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the Rhinon developer documentation.",
};

export default function LoginPage() {
  return (
    <div className="ambient-glow relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="bg-grid absolute inset-0" />

      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-3xl border border-border bg-card/60 p-8 glass-strong ring-hairline">
          <div className="mb-7 text-center">
            <h1 className="font-heading text-2xl font-bold tracking-tight">
              Developer docs
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Enter your email to access the developer documentation. The public
              guides don&rsquo;t need a sign-in.
            </p>
          </div>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rhinon Technologies
        </p>
      </div>
    </div>
  );
}
