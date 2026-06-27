import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function ArticleRow({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-border bg-card/40 px-5 py-4 ring-hairline transition-colors hover:border-foreground/25 hover:bg-card/70"
    >
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 ring-1 ring-border">
        <FileText className="size-4 text-muted-foreground" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-heading text-sm font-semibold text-foreground">
          {title}
        </span>
        {description && (
          <span className="mt-0.5 block text-sm leading-6 text-muted-foreground">
            {description}
          </span>
        )}
      </span>
      <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}
