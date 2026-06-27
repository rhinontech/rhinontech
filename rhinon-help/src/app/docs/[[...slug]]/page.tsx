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
import { Markdown } from "@/components/docs/Markdown";
import { DocsToc } from "@/components/docs/DocsToc";
import { DocsPager } from "@/components/docs/DocsPager";
import { CodeCopy } from "@/components/docs/CodeCopy";
import { Breadcrumbs, type Crumb } from "@/components/docs/Breadcrumbs";

type Params = { slug?: string[] };

export function generateStaticParams() {
  return getAllSlugs("docs").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const doc = getDoc("docs", slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function DocsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const first = getFlatPages("docs")[0];
    if (first) redirect(first.href);
    notFound();
  }

  const doc = getDoc("docs", slug);
  if (!doc) notFound();

  const { prev, next } = getPagerFor("docs", doc.slug);
  const tree = getNavTree("docs");
  const group =
    doc.slug.length > 1
      ? tree.groups.find((g) => g.slug === doc.slug[0])
      : undefined;

  const crumbs: Crumb[] = [{ label: "Documentation", href: "/docs" }];
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

      {/* Right rail — On this page */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto py-10 xl:block">
        <DocsToc items={doc.toc} />
      </aside>
    </div>
  );
}
