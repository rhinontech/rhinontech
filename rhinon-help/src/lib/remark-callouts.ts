/**
 * Premium callout blocks from GitHub-style alert blockquotes.
 *
 * The markdown pipeline first rewrites `:::note … :::` fences into alert
 * blockquotes (see `markdown.ts#preprocessCallouts`):
 *
 *   > [!NOTE]
 *   > Useful background information.
 *
 *   > [!WARNING] Heads up
 *   > Custom title after the type.
 *
 * This plugin detects the `[!TYPE]` marker on a blockquote and turns it into
 * `<div class="callout callout-<type>">` with a styled title (see globals.css).
 * Supported types: note · tip · info · success · warning · danger.
 */
import { visit } from "unist-util-visit";
import type { Root, Blockquote, Paragraph, Text } from "mdast";

const TITLES: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  info: "Info",
  success: "Success",
  warning: "Warning",
  danger: "Danger",
};

export function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const firstChild = node.children[0];
      if (!firstChild || firstChild.type !== "paragraph") return;
      const para = firstChild as Paragraph;
      const firstText = para.children[0];
      if (!firstText || firstText.type !== "text") return;

      const text = firstText as Text;
      const match = /^\[!(\w+)\][^\S\n]*([^\n]*)(\n?)/.exec(text.value);
      if (!match) return;

      const type = match[1].toLowerCase();
      if (!(type in TITLES)) return;

      const inlineTitle = match[2].trim();
      const title = inlineTitle || TITLES[type];

      // Strip the marker line, keeping any body that followed on later lines.
      text.value = text.value.slice(match[0].length);
      if (text.value === "" && para.children.length === 1) {
        node.children.shift();
      }

      const data = node.data || (node.data = {});
      data.hName = "div";
      data.hProperties = {
        className: ["callout", `callout-${type}`],
        "data-callout": type,
      };

      node.children.unshift({
        type: "paragraph",
        data: { hName: "div", hProperties: { className: ["callout-title"] } },
        children: [{ type: "text", value: title }],
      } as Paragraph);
    });
  };
}
