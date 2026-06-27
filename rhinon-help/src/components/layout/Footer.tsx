import Link from "next/link";
import { Logo } from "@/components/Logo";

const COLUMNS = [
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs/getting-started/introduction" },
      { label: "Guides", href: "/docs/guides/authentication" },
      { label: "Quickstart", href: "/docs/getting-started/quickstart" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "Account & Access", href: "/help/account" },
      { label: "Billing & Plans", href: "/help/billing" },
      { label: "Troubleshooting", href: "/help/troubleshooting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Rhinon.tech", href: "https://rhinon.tech" },
      { label: "Dashboard", href: "https://app.rhinon.tech" },
      { label: "Status", href: "https://status.rhinon.tech" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Documentation, guides and support for the Rhinon platform. Build,
            integrate and ship faster.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Rhinon Technologies. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-foreground/80" />
              All systems operational
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
