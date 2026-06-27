import Link from "next/link";
import { BookText, Home } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { PRODUCTS, DEFAULT_TRACK } from "@/lib/products";

export default function NotFound() {
  return (
    <div className="ambient-glow relative flex min-h-screen flex-col overflow-hidden">
      <div className="bg-grid absolute inset-0" />

      <div className="relative px-6 py-6">
        <Logo />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <p className="font-heading text-7xl font-bold tracking-tight text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-muted-foreground text-balance">
          The page you&rsquo;re looking for may have moved, or the link might be
          out of date.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="h-10" nativeButton={false} render={<Link href="/" />}>
            <Home />
            Back home
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-10"
            nativeButton={false}
            render={<Link href={`/${PRODUCTS[0].id}/${DEFAULT_TRACK}`} />}
          >
            <BookText />
            Browse guides
          </Button>
        </div>
      </div>
    </div>
  );
}
