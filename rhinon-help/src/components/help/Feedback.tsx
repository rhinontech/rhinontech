"use client";

import * as React from "react";
import { ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * "Was this helpful?" widget. UI-only for now — wire `onVote` to the feedback
 * backend when it's available.
 */
export function Feedback() {
  const [voted, setVoted] = React.useState<null | "up" | "down">(null);

  if (voted) {
    return (
      <div className="mt-12 flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-4 text-sm text-muted-foreground ring-hairline">
        <Check className="size-4 text-foreground" />
        Thanks for your feedback.
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card/40 px-5 py-4 ring-hairline">
      <span className="text-sm font-medium text-foreground">Was this helpful?</span>
      <div className="flex items-center gap-2">
        {(["up", "down"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setVoted(v)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
            )}
          >
            {v === "up" ? (
              <ThumbsUp className="size-3.5" />
            ) : (
              <ThumbsDown className="size-3.5" />
            )}
            {v === "up" ? "Yes" : "No"}
          </button>
        ))}
      </div>
    </div>
  );
}
