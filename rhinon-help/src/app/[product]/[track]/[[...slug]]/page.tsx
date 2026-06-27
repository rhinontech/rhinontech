import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Clock } from "lucide-react";
import {
  getAllSlugs,
  getDoc,
  getFlatPages,
  getNavTree,
  getPagerFor,
} from "@/lib/content";
import {
  allSpaces,
  getProduct,
  isProductId,
  isTrackId,
  spaceId,
  TRACK_LABELS,
} from "@/lib/products";
import { Markdown } from "@/components/docs/Markdown";
import { DocsToc } from "@/components/docs/DocsToc";
import { DocsPager } from "@/components/docs/DocsPager";
import { CodeCopy } from "@/components/docs/CodeCopy";
import { Breadcrumbs, type Crumb } from "@/components/docs/Breadcrumbs";

type Params = { product: string; track: string; slug?: string[] };

export function generateStaticParams() {
  return allSpaces().flatMap(({ product, track, space }) =>
    getAllSlugs(space).map((slug) => ({
      product: product.id,
      track,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { product, track, slug = [] } = await params;
  if (!isProductId(product) || !isTrackId(track)) return {};
  const doc = getDoc(spaceId(product, track), slug);
  if (!doc) return {};
  const name = getProduct(product)?.name ?? product;
  return { title: `${doc.title} · ${name}`, description: doc.description };
}

export default async function ProductDocPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { product, track, slug } = await params;
  if (!isProductId(product) || !isTrackId(track)) notFound();

  const meta = getProduct(product);
  if (!meta || !meta.tracks.includes(track)) notFound();

  const space = spaceId(product, track);

  if (!slug || slug.length === 0) {
    const first = getFlatPages(space)[0];
    if (first) redirect(first.href);
    notFound();
  }

  const doc = getDoc(space, slug);
  if (!doc) notFound();

  const { prev, next } = getPagerFor(space, doc.slug);
  const tree = getNavTree(space);
  const group =
    doc.slug.length > 1
      ? tree.groups.find((g) => g.slug === doc.slug[0])
      : undefined;

  const crumbs: Crumb[] = [{ label: meta.name, href: `/${product}/${track}` }];
  if (meta.tracks.length > 1) crumbs.push({ label: TRACK_LABELS[track] });
  if (group) crumbs.push({ label: group.label });
  crumbs.push({ label: doc.title });

  return (
    <div className="flex gap-12 py-10">
      <article className="mx-auto min-w-0 max-w-3xl flex-1 xl:mx-0">
        <Breadcrumbs items={crumbs} />

        <header className="mb-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="mt-3 text-lg leading-7 text-muted-foreground">
              {doc.description}
            </p>
          )}
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {doc.readingTime} min read
          </div>
        </header>

        <Markdown source={doc.content} />
        <DocsPager prev={prev} next={next} />
        <CodeCopy />
      </article>

      {/* Right rail - On this page */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto py-10 xl:block">
        <DocsToc items={doc.toc} />
      </aside>
    </div>
  );
}
