import Link from "next/link";
import { cn } from "@/lib/utils";

/** Monochrome Rhinon mark + wordmark. */
export function Logo({
  className,
  href = "/",
  label = "Help",
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 text-foreground",
        className
      )}
    >
      <span className="relative inline-flex size-7 items-center justify-center rounded-[0.55rem] bg-foreground text-background ring-hairline transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-4"
          aria-hidden
        >
          <path
            d="M5 19V8.5C5 6.567 6.567 5 8.5 5H13a5 5 0 0 1 5 5c0 2.5-1.8 4-4 4.4L18.5 19"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[0.95rem] font-semibold tracking-tight">
        Rhinon{" "}
        <span className="font-normal text-muted-foreground">{label}</span>
      </span>
    </Link>
  );
}
