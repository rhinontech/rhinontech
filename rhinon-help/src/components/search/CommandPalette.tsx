"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, FileText, ArrowUp, ArrowDown } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import type { SearchDoc } from "@/lib/search";
import { cn } from "@/lib/utils";

export function CommandPalette({
  open,
  onOpenChange,
  index,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  index: SearchDoc[];
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement>(null);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = q
      ? index.filter((d) => q.split(/\s+/).every((t) => d.keywords.includes(t)))
      : index.slice(0, 6);
    return pool.slice(0, 24);
  }, [query, index]);

  React.useEffect(() => setActive(0), [query]);

  // Reset query a tick after closing so it doesn't flash on reopen.
  React.useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setQuery(""), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  const go = React.useCallback(
    (href: string) => {
      onOpenChange(false);
      router.push(href);
    },
    [onOpenChange, router]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = results[active];
      if (hit) go(hit.href);
    }
  };

  React.useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="top-[12vh] w-full max-w-xl translate-y-0 gap-0 overflow-hidden rounded-2xl p-0 glass-strong ring-1 ring-foreground/10"
      >
        <DialogTitle className="sr-only">Search documentation</DialogTitle>

        {/* Input */}
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search documentation and help articles…"
            className="h-14 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none"
          />
          <Kbd className="hidden sm:inline-flex">Esc</Kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center text-sm text-muted-foreground">
              No results for{" "}
              <span className="text-foreground">&ldquo;{query}&rdquo;</span>
            </div>
          ) : (
            <ul className="space-y-0.5">
              {results.map((r, i) => (
                <li key={r.href}>
                  <button
                    data-idx={i}
                    onClick={() => go(r.href)}
                    onMouseMove={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      i === active
                        ? "bg-foreground/10 text-foreground"
                        : "text-foreground/70 hover:bg-foreground/5"
                    )}
                  >
                    <FileText className="size-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-foreground">
                        {r.title}
                      </span>
                      {r.description && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {r.description}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                      {r.spaceLabel}
                    </span>
                    {i === active && (
                      <CornerDownLeft className="size-3.5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 text-[0.7rem] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Kbd>
              <ArrowUp className="size-3" />
            </Kbd>
            <Kbd>
              <ArrowDown className="size-3" />
            </Kbd>
            to navigate
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>
              <CornerDownLeft className="size-3" />
            </Kbd>
            to open
          </span>
          <span className="ml-auto hidden items-center gap-1.5 sm:flex">
            Search by Rhinon
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
