import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DocsNav } from "@/components/docs/DocsNav";
import { DocsMobileSidebar } from "@/components/docs/DocsMobileSidebar";
import { getNavTree } from "@/lib/content";
import {
  getProduct,
  isProductId,
  isTrackId,
  spaceId,
  TRACK_LABELS,
} from "@/lib/products";
import { cn } from "@/lib/utils";

type Params = { product: string; track: string };

export default async function ProductTrackLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { product, track } = await params;
  if (!isProductId(product) || !isTrackId(track)) notFound();

  const meta = getProduct(product);
  if (!meta || !meta.tracks.includes(track)) notFound();

  const space = spaceId(product, track);
  const tree = getNavTree(space);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader startSlot={<DocsMobileSidebar tree={tree} />} />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 px-4 sm:px-6">
        {/* Left sidebar - sticky, scrolls independently */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto py-8 pr-4 lg:block">
          {meta.tracks.length > 1 && (
            <div className="mb-5 flex gap-1 rounded-lg border border-border p-1">
              {meta.tracks.map((t) => (
                <Link
                  key={t}
                  href={`/${product}/${t}`}
                  className={cn(
                    "flex-1 rounded-md px-3 py-1.5 text-center text-sm font-medium transition-colors",
                    t === track
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {TRACK_LABELS[t]}
                </Link>
              ))}
            </div>
          )}
          <DocsNav tree={tree} />
        </aside>

        <main className="min-w-0 flex-1 lg:border-l lg:border-border lg:pl-8">
          {children}
        </main>
      </div>
    </div>
  );
}
