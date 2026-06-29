import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-foreground" : undefined}>{item.label}</span>
            )}
            {!last && <ChevronRight className="size-3.5 opacity-60" />}
          </span>
        );
      })}
    </nav>
  );
}
