import { SiteHeader } from "@/components/layout/SiteHeader";
import { DocsNav } from "@/components/docs/DocsNav";
import { DocsMobileSidebar } from "@/components/docs/DocsMobileSidebar";
import { getNavTree } from "@/lib/content";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = getNavTree("docs");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader startSlot={<DocsMobileSidebar tree={tree} />} />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 px-4 sm:px-6">
        {/* Left sidebar — sticky, scrolls independently */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto py-8 pr-4 lg:block">
          <DocsNav tree={tree} />
        </aside>

        <main className="min-w-0 flex-1 lg:border-l lg:border-border lg:pl-8">
          {children}
        </main>
      </div>
    </div>
  );
}
