import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { Markdown } from "@/components/docs/Markdown";
import { CodeCopy } from "@/components/docs/CodeCopy";
import { ArticleRow } from "@/components/help/ArticleRow";
import { Feedback } from "@/components/help/Feedback";
import { getAllSlugs, getDoc, getHelpCategories } from "@/lib/content";

type Params = { category: string; slug: string };

export function generateStaticParams() {
  return getAllSlugs("help")
    .filter((s) => s.length === 2)
    .map(([category, slug]) => ({ category, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const doc = getDoc("help", [category, slug]);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const doc = getDoc("help", [category, slug]);
  if (!doc) notFound();

  const group = getHelpCategories().find((c) => c.slug === category);
  const related = (group?.items ?? [])
    .filter((i) => i.href !== doc.href)
    .map((i) => {
      const d = getDoc("help", i.slug);
      return { href: i.href, title: i.title, description: d?.description };
    })
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Help Center", href: "/" },
          { label: group?.label ?? category, href: `/help/${category}` },
          { label: doc.title },
        ]}
      />

      <article>
        <header className="mb-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="mt-3 text-lg leading-7 text-muted-foreground">
              {doc.description}
            </p>
          )}
        </header>

        <Markdown source={doc.content} />
        <CodeCopy />
        <Feedback />
      </article>

      {related.length > 0 && (
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="mb-5 font-heading text-lg font-bold tracking-tight">
            Related articles
          </h2>
          <div className="space-y-3">
            {related.map((r) => (
              <ArticleRow
                key={r.href}
                href={r.href}
                title={r.title}
                description={r.description}
              />
            ))}
          </div>
        </section>
      )}

      <div className="mt-12">
        <Link
          href={`/help/${category}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to {group?.label ?? "category"}
        </Link>
      </div>
    </div>
  );
}
