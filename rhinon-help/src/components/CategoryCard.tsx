import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";

export function CategoryCard({
  href,
  icon,
  title,
  description,
  count,
  countLabel = "articles",
}: {
  href: string;
  icon?: string;
  title: string;
  description?: string;
  count?: number;
  countLabel?: string;
}) {
  return (
    <Link
      href={href}
      className="hover-lift group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 ring-hairline transition-colors hover:border-foreground/25 hover:bg-card/70"
    >
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-foreground/5 ring-1 ring-border transition-colors group-hover:bg-foreground/10">
        <Icon name={icon} className="size-5 text-foreground" />
      </div>
      <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-1.5 flex-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {typeof count === "number" && (
          <span>
            {count}{" "}
            {count === 1 && countLabel.endsWith("s")
              ? countLabel.slice(0, -1)
              : countLabel}
          </span>
        )}
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
