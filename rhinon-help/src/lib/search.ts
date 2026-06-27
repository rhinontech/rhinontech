/**
 * Search index (server-only).
 *
 * Builds a flat, lightweight index from the content tree for the ⌘K command
 * palette. Today it's derived locally from markdown; when the real backend is
 * ready, replace `getSearchIndex` with a fetch to the search API - the palette
 * consumes this shape and won't need to change.
 */
import { getAllSlugs, getDoc, type Space } from "./content";
import {
  allSpaces,
  TRACK_LABELS,
  type ProductId,
  type TrackId,
} from "./products";

export type SearchDoc = {
  title: string;
  description?: string;
  href: string;
  space: Space;
  product: ProductId;
  track: TrackId;
  /** Display label, e.g. "Saleszium · Guide", shown on each result. */
  spaceLabel: string;
  group?: string;
  /** lowercased haystack for client-side filtering */
  keywords: string;
};

function buildSpace(
  space: Space,
  product: ProductId,
  productName: string,
  track: TrackId
): SearchDoc[] {
  const spaceLabel = `${productName} · ${TRACK_LABELS[track]}`;
  const docs: SearchDoc[] = [];
  for (const slug of getAllSlugs(space)) {
    const doc = getDoc(space, slug);
    if (!doc) continue;
    docs.push({
      title: doc.title,
      description: doc.description,
      href: doc.href,
      space,
      product,
      track,
      spaceLabel,
      group: slug.length > 1 ? slug[0] : undefined,
      keywords: [
        doc.title,
        doc.description ?? "",
        productName,
        ...doc.toc.map((t) => t.title),
        slug.join(" "),
      ]
        .join(" ")
        .toLowerCase(),
    });
  }
  return docs;
}

export function getSearchIndex(): SearchDoc[] {
  return allSpaces().flatMap(({ product, track, space }) =>
    buildSpace(space, product.id, product.name, track)
  );
}
