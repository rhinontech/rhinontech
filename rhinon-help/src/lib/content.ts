/**
 * Content engine - GitBook-style markdown folder sync.
 *
 * Content lives as a tree of `.md` / `.mdx` files under `content/<space>`,
 * where a "space" is a `<product>/<track>` pair (see {@link ./products}).
 * Editing or adding a file updates the site: the sidebar nav, the routes and
 * the per-page "On this page" TOC are all derived from this tree at build time.
 *
 * Folder = a sidebar group (label/order configurable via an optional `meta.json`).
 * File   = a page. URL is the path relative to the section root, minus extension.
 *
 *   content/saleszium/guide/getting-started/quickstart.md
 *     ->  /saleszium/guide/getting-started/quickstart
 *
 * This module is server-only (uses `fs`); never import it into a client component.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import type { Space } from "./products";

export type { Space };

export type TocItem = {
  id: string;
  title: string;
  level: number;
};

export type Frontmatter = {
  title?: string;
  description?: string;
  order?: number;
  /** lucide icon name, used for help-center category cards */
  icon?: string;
  /** mark a page as featured/popular on the hub */
  featured?: boolean;
};

export type DocPage = {
  space: Space;
  /** slug segments, e.g. ["getting-started", "quickstart"] */
  slug: string[];
  /** url path, e.g. "/saleszium/guide/getting-started/quickstart" */
  href: string;
  title: string;
  description?: string;
  frontmatter: Frontmatter;
  /** raw markdown body (no frontmatter) */
  content: string;
  toc: TocItem[];
  readingTime: number;
};

export type NavItem = {
  title: string;
  href: string;
  slug: string[];
};

export type NavGroup = {
  label: string;
  /** folder slug, e.g. "getting-started" */
  slug: string;
  order: number;
  icon?: string;
  description?: string;
  items: NavItem[];
};

export type NavTree = {
  /** pages that sit directly in the section root (ungrouped) */
  rootItems: NavItem[];
  groups: NavGroup[];
};

type FolderMeta = {
  label?: string;
  order?: number;
  icon?: string;
  description?: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");
const EXTENSIONS = [".md", ".mdx"];

/** Filesystem dir for a space. `space` may contain a "/" (product/track). */
function spaceDir(space: Space) {
  return path.join(CONTENT_ROOT, ...space.split("/"));
}

function exists(p: string) {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

function readFolderMeta(dir: string): FolderMeta {
  const metaPath = path.join(dir, "meta.json");
  if (!exists(metaPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8")) as FolderMeta;
  } catch {
    return {};
  }
}

function isContentFile(name: string) {
  return EXTENSIONS.some((ext) => name.endsWith(ext)) && !name.startsWith("_");
}

function stripExt(name: string) {
  for (const ext of EXTENSIONS) {
    if (name.endsWith(ext)) return name.slice(0, -ext.length);
  }
  return name;
}

/** Turn a kebab/snake slug into a human label as a fallback. */
function humanize(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readPageMeta(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Frontmatter, content };
}

/** Resolve a slug (array of segments) to an actual file on disk. */
function resolveFile(space: Space, slug: string[]): string | null {
  const base = path.join(spaceDir(space), ...slug);
  // direct file: foo/bar.md
  for (const ext of EXTENSIONS) {
    if (exists(base + ext)) return base + ext;
  }
  // folder index: foo/bar/index.md
  for (const ext of EXTENSIONS) {
    const idx = path.join(base, "index" + ext);
    if (exists(idx)) return idx;
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/*  Navigation tree                                                            */
/* -------------------------------------------------------------------------- */

function fileToNavItem(
  space: Space,
  segments: string[],
  filePath: string
): NavItem {
  const { frontmatter } = readPageMeta(filePath);
  const last = segments[segments.length - 1];
  return {
    title: frontmatter.title ?? humanize(last),
    href: "/" + [space, ...segments].join("/"),
    slug: segments,
  };
}

function orderOf(filePath: string): number {
  try {
    const { frontmatter } = readPageMeta(filePath);
    return frontmatter.order ?? 999;
  } catch {
    return 999;
  }
}

export function getNavTree(space: Space): NavTree {
  const dir = spaceDir(space);
  if (!exists(dir)) return { rootItems: [], groups: [] };

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const rootFiles = entries
    .filter((e) => e.isFile() && isContentFile(e.name) && e.name !== "index.md")
    .map((e) => ({
      slug: stripExt(e.name),
      file: path.join(dir, e.name),
    }))
    .sort((a, b) => orderOf(a.file) - orderOf(b.file));

  const rootItems: NavItem[] = rootFiles.map((f) =>
    fileToNavItem(space, [f.slug], f.file)
  );

  const groups: NavGroup[] = entries
    .filter((e) => e.isDirectory())
    .map((e) => {
      const folder = path.join(dir, e.name);
      const meta = readFolderMeta(folder);
      const files = fs
        .readdirSync(folder, { withFileTypes: true })
        .filter((f) => f.isFile() && isContentFile(f.name))
        .map((f) => ({
          slug: stripExt(f.name),
          file: path.join(folder, f.name),
        }))
        .sort((a, b) => orderOf(a.file) - orderOf(b.file));

      const items: NavItem[] = files.map((f) =>
        fileToNavItem(space, [e.name, f.slug], f.file)
      );

      return {
        label: meta.label ?? humanize(e.name),
        slug: e.name,
        order: meta.order ?? 999,
        icon: meta.icon,
        description: meta.description,
        items,
      };
    })
    .filter((g) => g.items.length > 0)
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));

  return { rootItems, groups };
}

/** Flattened, ordered page list for prev/next pagination. */
export function getFlatPages(space: Space): NavItem[] {
  const tree = getNavTree(space);
  return [...tree.rootItems, ...tree.groups.flatMap((g) => g.items)];
}

export function getPagerFor(
  space: Space,
  slug: string[]
): { prev: NavItem | null; next: NavItem | null } {
  const flat = getFlatPages(space);
  const href = "/" + [space, ...slug].join("/");
  const idx = flat.findIndex((p) => p.href === href);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

/* -------------------------------------------------------------------------- */
/*  Page resolution + TOC                                                      */
/* -------------------------------------------------------------------------- */

/** Extract h2/h3 headings for the "On this page" rail, matching rehype-slug ids. */
export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;
    const level = match[1].length;
    const title = match[2]
      .replace(/[*_`]/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .trim();
    toc.push({ id: slugger.slug(title), title, level });
  }
  return toc;
}

function estimateReadingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Drop a leading `# Heading` from the body - the page chrome already renders
 * the title from frontmatter, so authors can write a natural H1 without it
 * showing up twice.
 */
function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+.+\n+/, "");
}

export function getDoc(space: Space, slug: string[]): DocPage | null {
  // empty slug -> section landing (index file or first page)
  let segments = slug;
  let file = resolveFile(space, slug);

  if (!file && slug.length === 0) {
    const first = getFlatPages(space)[0];
    if (!first) return null;
    segments = first.slug;
    file = resolveFile(space, first.slug);
  }
  if (!file) return null;

  const { frontmatter, content } = readPageMeta(file);
  const last = segments[segments.length - 1] ?? space;
  const body = stripLeadingH1(content);

  return {
    space,
    slug: segments,
    href: "/" + [space, ...segments].join("/"),
    title: frontmatter.title ?? humanize(last),
    description: frontmatter.description,
    frontmatter,
    content: body,
    toc: extractToc(body),
    readingTime: estimateReadingTime(body),
  };
}

/** All slugs in a space, for generateStaticParams. */
export function getAllSlugs(space: Space): string[][] {
  const walk = (dir: string, prefix: string[]): string[][] => {
    if (!exists(dir)) return [];
    const out: string[][] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        out.push(...walk(path.join(dir, entry.name), [...prefix, entry.name]));
      } else if (isContentFile(entry.name)) {
        const name = stripExt(entry.name);
        out.push(name === "index" ? prefix : [...prefix, name]);
      }
    }
    return out;
  };
  return walk(spaceDir(space), []);
}

/** Top-level folders of a space, surfaced as category cards on a landing page. */
export function getCategories(space: Space): NavGroup[] {
  return getNavTree(space).groups;
}

/** Featured pages across a space, for "popular articles" on hubs. */
export function getFeatured(space: Space, limit = 6): NavItem[] {
  const dir = spaceDir(space);
  if (!exists(dir)) return [];
  const featured: NavItem[] = [];
  for (const slug of getAllSlugs(space)) {
    const file = resolveFile(space, slug);
    if (!file) continue;
    const { frontmatter } = readPageMeta(file);
    if (frontmatter.featured) {
      featured.push({
        title: frontmatter.title ?? humanize(slug[slug.length - 1] ?? ""),
        href: "/" + [space, ...slug].join("/"),
        slug,
      });
    }
  }
  return featured.slice(0, limit);
}
