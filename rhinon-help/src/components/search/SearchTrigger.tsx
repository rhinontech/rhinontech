"use client";

import { Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import { useSearch } from "./SearchProvider";

/** Pill-style search box that opens the ⌘K command palette. */
export function SearchTrigger({
  className,
  placeholder = "Search documentation…",
}: {
  className?: string;
  placeholder?: string;
}) {
  const { setOpen } = useSearch();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "group flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted/70",
        className
      )}
    >
      <Search className="size-4 shrink-0 transition-colors group-hover:text-foreground" />
      <span className="flex-1 text-left">{placeholder}</span>
      <Kbd className="hidden gap-0.5 bg-background/60 sm:inline-flex">⌘K</Kbd>
    </button>
  );
}

/** Compact icon-only variant for tight layouts (mobile). */
export function SearchIconButton({ className }: { className?: string }) {
  const { setOpen } = useSearch();
  return (
    <button
      type="button"
      aria-label="Search"
      onClick={() => setOpen(true)}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground",
        className
      )}
    >
      <Search className="size-4" />
    </button>
  );
}
