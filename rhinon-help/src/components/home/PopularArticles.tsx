import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/lib/content";

export function PopularArticles({ items }: { items: NavItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border ring-hairline sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex items-center gap-3.5 bg-card/40 px-5 py-4 transition-colors hover:bg-card/80"
        >
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 ring-1 ring-border">
            <FileText className="size-4 text-muted-foreground" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium text-foreground">
              {item.title}
            </span>
            <span className="block truncate text-xs capitalize text-muted-foreground">
              {item.slug[0]?.replace(/-/g, " ")}
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}
