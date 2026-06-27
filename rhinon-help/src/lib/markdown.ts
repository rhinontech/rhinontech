/**
 * Markdown → HTML pipeline (server-only).
 *
 * Runs the full async unified pipeline so Shiki syntax highlighting works at
 * build time. Output is premium, statically-highlighted HTML rendered inside
 * `.docs-content` (see globals.css). Progressive niceties (copy buttons, TOC
 * scroll-spy) are layered on top by client components.
 */
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { remarkCallouts } from "./remark-callouts";

const prettyCodeOptions: PrettyCodeOptions = {
  // Monochrome-friendly dark theme; our CSS owns the surrounding chrome.
  theme: "github-dark-default",
  keepBackground: false,
  defaultLang: { block: "text", inline: "text" },
};

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkCallouts)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: "append",
    properties: { className: ["heading-anchor"], ariaHidden: "true", tabIndex: -1 },
    content: { type: "text", value: "#" },
  })
  .use(rehypePrettyCode, prettyCodeOptions)
  .use(rehypeStringify, { allowDangerousHtml: true });

/**
 * Convert author-friendly callout fences into GitHub-style alert blockquotes,
 * which remark parses natively (no micromark extension required):
 *
 *   :::warning Heads up        ->   > [!WARNING] Heads up
 *   body                            > body
 *   :::
 */
function preprocessCallouts(src: string): string {
  return src.replace(
    /^:::(\w+)(?:[ \t]+([^\n]+))?\n([\s\S]*?)^:::[ \t]*$/gm,
    (_m, type: string, title: string | undefined, body: string) => {
      const head = `[!${type.toUpperCase()}]${title ? " " + title.trim() : ""}`;
      const lines = body.replace(/\n+$/, "").split("\n");
      return [head, ...lines].map((l) => (l ? `> ${l}` : ">")).join("\n") + "\n";
    }
  );
}

export async function markdownToHtml(source: string): Promise<string> {
  const file = await processor.process(preprocessCallouts(source));
  return String(file);
}
