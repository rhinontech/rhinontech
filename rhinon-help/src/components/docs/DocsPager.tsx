import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NavItem } from "@/lib/content";

export function DocsPager({
  prev,
  next,
}: {
  prev: NavItem | null;
  next: NavItem | null;
}) {
  if (!prev && !next) return null;
  return (
    <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="hover-lift group flex flex-col gap-1 rounded-xl border border-border bg-card/40 p-4 ring-hairline hover:border-foreground/20"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="font-heading text-sm font-semibold text-foreground">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="hover-lift group flex flex-col items-end gap-1 rounded-xl border border-border bg-card/40 p-4 text-right ring-hairline hover:border-foreground/20"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Next
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-heading text-sm font-semibold text-foreground">
            {next.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
    </div>
  );
}
