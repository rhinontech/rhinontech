"use client";

import * as React from "react";
import type { SearchDoc } from "@/lib/search";
import { CommandPalette } from "./CommandPalette";

type SearchContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  index: SearchDoc[];
};

const SearchContext = React.createContext<SearchContextValue | null>(null);

export function useSearch() {
  const ctx = React.useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within <SearchProvider>");
  return ctx;
}

export function SearchProvider({
  index,
  children,
}: {
  index: SearchDoc[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  // Gated (developer-track) entries are never in the server-rendered index —
  // they're fetched here and come back empty without a valid session.
  const [gated, setGated] = React.useState<SearchDoc[]>([]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    fetch("/api/search/gated", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : { docs: [] }))
      .then((data: { docs?: SearchDoc[] }) => {
        if (!cancelled && Array.isArray(data?.docs)) setGated(data.docs);
      })
      .catch(() => {
        /* stay public-only */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const fullIndex = React.useMemo(() => [...index, ...gated], [index, gated]);

  const value = React.useMemo<SearchContextValue>(
    () => ({ open, setOpen, toggle: () => setOpen((v) => !v), index: fullIndex }),
    [open, fullIndex]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
      <CommandPalette open={open} onOpenChange={setOpen} index={fullIndex} />
    </SearchContext.Provider>
  );
}
