"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement: injects a copy button onto every code block rendered
 * by the markdown pipeline. Runs client-side so the markdown itself stays a
 * static, cacheable server payload.
 */
export function CodeCopy() {
  const pathname = usePathname();

  React.useEffect(() => {
    const root = document.querySelector(".docs-content");
    if (!root) return;

    const blocks = Array.from(root.querySelectorAll("pre"));
    const cleanups: Array<() => void> = [];

    for (const pre of blocks) {
      const container =
        (pre.closest("figure[data-rehype-pretty-code-figure]") as HTMLElement) ??
        pre;
      if (container.dataset.copyEnhanced) continue;
      container.dataset.copyEnhanced = "true";
      container.style.position = "relative";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Copy code");
      btn.className =
        "code-copy-btn absolute right-2.5 top-2.5 z-10 inline-flex size-7 items-center justify-center rounded-md border border-border bg-background/70 text-muted-foreground opacity-0 backdrop-blur transition hover:text-foreground group-hover/code:opacity-100";
      btn.innerHTML = COPY_ICON;
      container.classList.add("group/code");

      const onClick = async () => {
        try {
          await navigator.clipboard.writeText(pre.innerText.replace(/\n$/, ""));
          btn.innerHTML = CHECK_ICON;
          btn.classList.add("text-foreground", "opacity-100");
          setTimeout(() => {
            btn.innerHTML = COPY_ICON;
            btn.classList.remove("text-foreground");
          }, 1600);
        } catch {
          /* clipboard unavailable */
        }
      };
      btn.addEventListener("click", onClick);
      container.appendChild(btn);

      cleanups.push(() => {
        btn.removeEventListener("click", onClick);
        btn.remove();
        delete container.dataset.copyEnhanced;
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}

const COPY_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
const CHECK_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
