import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { ArticleRow } from "@/components/help/ArticleRow";
import { Icon } from "@/components/Icon";
import { getDoc, getHelpCategories, getNavTree } from "@/lib/content";

type Params = { category: string };

export function generateStaticParams() {
  return getHelpCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const group = getHelpCategories().find((c) => c.slug === category);
  if (!group) return {};
  return { title: group.label, description: group.description };
}

export default async function HelpCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const categories = getHelpCategories();
  const group = categories.find((c) => c.slug === category);
  if (!group) notFound();

  const articles = group.items.map((item) => {
    const doc = getDoc("help", item.slug);
    return {
      href: item.href,
      title: item.title,
      description: doc?.description,
    };
  });

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Help Center", href: "/" },
          { label: group.label },
        ]}
      />

      <header className="mb-10 flex items-start gap-4">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background">
          <Icon name={group.icon} className="size-6" />
        </span>
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            {group.label}
          </h1>
          {group.description && (
            <p className="mt-1.5 text-muted-foreground">{group.description}</p>
          )}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
        <div className="space-y-3">
          {articles.map((a) => (
            <ArticleRow
              key={a.href}
              href={a.href}
              title={a.title}
              description={a.description}
            />
          ))}
        </div>

        <aside className="lg:pt-1">
          <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Other categories
          </p>
          <nav className="space-y-1">
            {categories
              .filter((c) => c.slug !== group.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/help/${c.slug}`}
                  className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Icon name={c.icon} className="size-4" />
                  {c.label}
                </Link>
              ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
