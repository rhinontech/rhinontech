import Link from "next/link";
import { ArrowRight, LifeBuoy, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { HomeSearch } from "@/components/home/HomeSearch";
import { PopularArticles } from "@/components/home/PopularArticles";
import { Button } from "@/components/ui/button";
import { getAllSlugs, getFeatured } from "@/lib/content";
import { PRODUCTS, DEFAULT_TRACK, spaceId } from "@/lib/products";

export default function HomePage() {
  const productCards = PRODUCTS.map((p) => {
    const space = spaceId(p.id, DEFAULT_TRACK);
    return {
      id: p.id,
      title: p.name,
      description: p.tagline,
      icon: p.icon,
      href: `/${p.id}/${DEFAULT_TRACK}`,
      count: getAllSlugs(space).length,
    };
  });

  const featured = PRODUCTS.flatMap((p) =>
    getFeatured(spaceId(p.id, DEFAULT_TRACK), 2)
  ).slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="ambient-glow relative overflow-hidden border-b border-border">
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground glass">
              <LifeBuoy className="size-3.5" />
              Rhinon Help Center
            </div>
            <h1 className="animate-fade-up font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              <span className="text-gradient">How can we help?</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground text-balance">
              Pick a product to explore its complete guide - what it does, how it
              works, and how to get the most out of it.
            </p>

            <div className="animate-fade-up mt-9">
              <HomeSearch />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">Products:</span>
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${p.id}/${DEFAULT_TRACK}`}
                    className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Browse by product */}
        <section className="mx-auto max-w-[1100px] px-6 py-16">
          <SectionHeading
            title="Browse by product"
            subtitle="Documentation for every product under Rhinon Tech."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCards.map((c) => (
              <CategoryCard
                key={c.id}
                href={c.href}
                icon={c.icon}
                title={c.title}
                description={c.description}
                count={c.count}
                countLabel="pages"
              />
            ))}
          </div>
        </section>

        {/* Popular articles */}
        {featured.length > 0 && (
          <section className="mx-auto max-w-[1100px] px-6 pb-16">
            <SectionHeading
              title="Popular articles"
              subtitle="The pages teams reach for most."
            />
            <PopularArticles items={featured} />
          </section>
        )}

        {/* Contact CTA */}
        <section className="mx-auto max-w-[1100px] px-6 pb-24">
          <div className="ambient-glow relative overflow-hidden rounded-3xl border border-border bg-card/40 px-8 py-14 text-center ring-hairline">
            <div className="bg-dots absolute inset-0 opacity-40" />
            <div className="relative">
              <MessageCircle className="mx-auto mb-4 size-7 text-foreground" />
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Still need a hand?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Can&rsquo;t find what you&rsquo;re looking for? Our support team is one
                message away.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="h-10"
                  nativeButton={false}
                  render={<a href="mailto:support@rhinon.tech" />}
                >
                  Contact support
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-10"
                  nativeButton={false}
                  render={<Link href={`/${PRODUCTS[0].id}/${DEFAULT_TRACK}`} />}
                >
                  Explore the guides
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
