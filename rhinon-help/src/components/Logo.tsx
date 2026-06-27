import Link from "next/link";
import { cn } from "@/lib/utils";

/** Rhinon Tech logo (light lockup, for dark surfaces). */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center", className)}
      aria-label="Rhinon Tech"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/rhinon-tech-logo.png"
        alt="Rhinon Tech"
        width={1383}
        height={380}
        className="h-8 w-auto transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
