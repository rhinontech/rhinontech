/**
 * Search index (server-only).
 *
 * Builds a flat, lightweight index from the content tree for the ⌘K command
 * palette. Today it's derived locally from markdown; when the real backend is
 * ready, replace `getSearchIndex` with a fetch to the search API — the palette
 * consumes this shape and won't need to change.
 */
import { getAllSlugs, getDoc, type Section } from "./content";

export type SearchDoc = {
  title: string;
  description?: string;
  href: string;
  section: Section;
  group?: string;
  /** lowercased haystack for client-side filtering */
  keywords: string;
};

function buildSection(section: Section): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const slug of getAllSlugs(section)) {
    const doc = getDoc(section, slug);
    if (!doc) continue;
    docs.push({
      title: doc.title,
      description: doc.description,
      href: doc.href,
      section,
      group: slug.length > 1 ? slug[0] : undefined,
      keywords: [
        doc.title,
        doc.description ?? "",
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
  return [...buildSection("docs"), ...buildSection("help")];
}
