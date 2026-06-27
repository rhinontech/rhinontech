import { markdownToHtml } from "@/lib/markdown";
import { cn } from "@/lib/utils";

/**
 * Server component that renders markdown to premium, Shiki-highlighted HTML
 * inside the `.docs-content` typographic scope. Pair with <CodeCopy /> on the
 * page to layer copy buttons on top of the static output.
 */
export async function Markdown({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  const html = await markdownToHtml(source);
  return (
    <div
      className={cn("docs-content", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
