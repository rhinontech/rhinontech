"use client";

import * as React from "react";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { DocsNav } from "./DocsNav";
import type { NavTree } from "@/lib/content";

export function DocsMobileSidebar({ tree }: { tree: NavTree }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation" />
        }
      >
        <PanelLeft />
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetTitle className="sr-only">Documentation navigation</SheetTitle>
        <div className="overflow-y-auto px-4 pb-8 pt-12">
          <DocsNav tree={tree} onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
