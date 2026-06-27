"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { SearchTrigger, SearchIconButton } from "@/components/search/SearchTrigger";
import { cn } from "@/lib/utils";

const NAV = [{ label: "Documentation", href: "/docs" }];

export function SiteHeader({ startSlot }: { startSlot?: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border glass">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 sm:px-6">
        {startSlot}
        <Logo />

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchTrigger className="hidden w-64 lg:flex" />
          <SearchIconButton className="lg:hidden" />

          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="hidden h-9 sm:inline-flex"
            render={
              <a href="https://app.rhinon.tech" target="_blank" rel="noreferrer" />
            }
          >
            Dashboard
            <ArrowUpRight />
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-1 px-4 pt-10">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-foreground/10 text-foreground"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://app.rhinon.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/5"
                >
                  Dashboard <ArrowUpRight className="size-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
