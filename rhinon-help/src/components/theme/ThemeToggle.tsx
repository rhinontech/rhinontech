"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dark/light theme toggle. Flips the `.dark` class on <html> and persists the
 * choice to localStorage (read back on next load by {@link ../theme/ThemeScript}).
 *
 * The icon is driven by CSS (`dark:` variant), so it reflects the current theme
 * immediately on click without any React state or hydration concerns.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore unavailable storage */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground",
        className
      )}
    >
      {/* Sun shows in dark mode (click → light); Moon shows in light mode. */}
      <Sun className="hidden size-4 dark:block" />
      <Moon className="block size-4 dark:hidden" />
    </button>
  );
}
