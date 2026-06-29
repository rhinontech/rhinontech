/**
 * Product registry - the single source of truth for which products the help
 * hub documents and which doc "tracks" each one exposes.
 *
 * A product's documentation lives under `content/<product>/<track>/…`, and is
 * served at `/<product>/<track>/…`. A "space" is the `<product>/<track>` pair
 * that the content engine ({@link ./content}) treats as a section root.
 *
 * This module is plain data + types (no `fs`), so it is safe to import from
 * both server and client components.
 */

export type ProductId = "saleszium" | "furrcircle" | "rhinon-labs";

export type TrackId = "guide" | "developers";

/** `<product>/<track>` - the key the content engine resolves to a folder + URL. */
export type Space = `${ProductId}/${TrackId}`;

/** The header's top-right call-to-action, which varies per product. */
export type ProductCta = {
  /** Button label, e.g. "Dashboard" or "Website". */
  label: string;
  /** Absolute URL the CTA points to. */
  href: string;
};

export type ProductMeta = {
  id: ProductId;
  /** Display name, e.g. "Saleszium". */
  name: string;
  /** One-line positioning, shown under the name on hub cards. */
  tagline: string;
  /** Longer blurb for the hub card body. */
  description: string;
  /** lucide icon name (resolved via {@link ../components/Icon}). */
  icon: string;
  /** Tracks that currently have content. The Developer track lands later. */
  tracks: TrackId[];
  /** Header CTA shown while browsing this product's docs. */
  cta: ProductCta;
};

export const TRACK_LABELS: Record<TrackId, string> = {
  guide: "Guide",
  developers: "Developers",
};

/** The default track a bare `/<product>` URL resolves to. */
export const DEFAULT_TRACK: TrackId = "guide";

/** CTA shown when no specific product is active (hub, 404, etc.). */
export const DEFAULT_CTA: ProductCta = {
  label: "Dashboard",
  href: "https://app.rhinon.tech",
};

export const PRODUCTS: ProductMeta[] = [
  {
    id: "saleszium",
    name: "Saleszium",
    tagline: "All-in-one customer engagement & sales platform",
    description:
      "AI chatbots, live chat, WhatsApp & email, CRM, sales pipeline, automation and campaigns - one platform to capture, engage and convert customers.",
    icon: "MessageSquare",
    tracks: ["guide", "developers"],
    cta: { label: "Dashboard", href: "https://app.saleszium.com/auth/login" },
  },
  {
    id: "furrcircle",
    name: "Furrcircle",
    tagline: "India's all-in-one app for pet parents",
    description:
      "A pet-first social network, a complete digital health passport, and a local community for playdates, adoption and vet discovery - in one app.",
    icon: "PawPrint",
    tracks: ["guide", "developers"],
    cta: { label: "Website", href: "https://furrcircle.com" },
  },
  {
    id: "rhinon-labs",
    name: "Rhinon Labs",
    tagline: "Full-stack product studio - idea to production, any stack",
    description:
      "A founder-led studio that designs, builds, deploys and supports digital products end to end - web, mobile, AI, automation and cloud - across JavaScript, Python and any stack your idea needs.",
    icon: "FlaskConical",
    tracks: ["guide", "developers"],
    cta: { label: "Website", href: "https://rhinonlabs.com" },
  },
];

export function getProduct(id: string): ProductMeta | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function isProductId(id: string): id is ProductId {
  return PRODUCTS.some((p) => p.id === id);
}

export function isTrackId(id: string): id is TrackId {
  return id === "guide" || id === "developers";
}

/** Build the `<product>/<track>` space key. */
export function spaceId(product: ProductId, track: TrackId): Space {
  return `${product}/${track}`;
}

/** Every (product, track) space that currently has content. */
export function allSpaces(): { product: ProductMeta; track: TrackId; space: Space }[] {
  return PRODUCTS.flatMap((product) =>
    product.tracks.map((track) => ({
      product,
      track,
      space: spaceId(product.id, track),
    }))
  );
}
