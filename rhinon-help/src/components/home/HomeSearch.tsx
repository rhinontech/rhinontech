"use client";

import { Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { useSearch } from "@/components/search/SearchProvider";

/** Large, prominent hero search box that opens the ⌘K command palette. */
export function HomeSearch() {
  const { setOpen } = useSearch();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="group mx-auto flex h-14 w-full max-w-xl items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 text-left glass ring-hairline transition-colors hover:border-foreground/25 hover:bg-card/80"
    >
      <Search className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      <span className="flex-1 text-[0.95rem] text-muted-foreground">
        Search documentation and help articles…
      </span>
      <Kbd className="hidden bg-background/60 sm:inline-flex">⌘K</Kbd>
    </button>
  );
}
