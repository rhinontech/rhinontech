"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Icon } from "@/components/Icon";
import type { NavTree, NavItem } from "@/lib/content";
import { cn } from "@/lib/utils";

function NavLink({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === item.href;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative block rounded-md py-1.5 pl-4 pr-2 text-sm transition-colors",
        "before:absolute before:left-0 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:bg-border",
        active
          ? "font-medium text-foreground before:bg-foreground"
          : "text-muted-foreground hover:text-foreground before:hover:bg-foreground/40"
      )}
    >
      {item.title}
    </Link>
  );
}

function NavGroupBlock({
  label,
  icon,
  items,
  onNavigate,
}: {
  label: string;
  icon?: string;
  items: NavItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const containsActive = items.some((i) => i.href === pathname);
  const [open, setOpen] = React.useState(true);

  // keep the active group open when navigating
  React.useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="py-1">
      <CollapsibleTrigger
        className={cn(
          "group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left",
          "text-xs font-semibold uppercase tracking-wider text-foreground/70 transition-colors hover:text-foreground"
        )}
      >
        {icon && <Icon name={icon} className="size-3.5 text-muted-foreground" />}
        <span className="flex-1">{label}</span>
        <ChevronRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-aria-expanded:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-2 mt-1 border-l border-border pl-2">
          {items.map((item) => (
            <NavLink key={item.href} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function DocsNav({
  tree,
  onNavigate,
}: {
  tree: NavTree;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-0.5">
      {tree.rootItems.length > 0 && (
        <div className="mb-2">
          {tree.rootItems.map((item) => (
            <NavLink key={item.href} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      )}
      {tree.groups.map((group) => (
        <NavGroupBlock
          key={group.slug}
          label={group.label}
          icon={group.icon}
          items={group.items}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
