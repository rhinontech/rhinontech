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

  const value = React.useMemo<SearchContextValue>(
    () => ({ open, setOpen, toggle: () => setOpen((v) => !v), index }),
    [open, index]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
      <CommandPalette open={open} onOpenChange={setOpen} index={index} />
    </SearchContext.Provider>
  );
}
