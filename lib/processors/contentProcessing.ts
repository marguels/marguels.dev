import remarkParse from "remark-parse";
import { unified } from "unified";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import headings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Root } from "hast";
import { TocItem, ObsidianLinks } from "@/interfaces/post";
import remarkEmbedImages from "remark-embed-images";
import {
  addClassToImages,
  getToc,
  remarkObsidianLinks,
  getObsidianGraphData,
} from "./customPlugins";

export const processContent = async (
    slug: string,
    title: string,
  content: string
): Promise<{
  contentHtml: string;
  toc: TocItem[];
  obsidianLinks: ObsidianLinks;
}> => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkObsidianLinks)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(remarkEmbedImages)
    .use(addClassToImages)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(headings, { behavior: "wrap", properties: {className: "heading-link"} })
    .use(rehypeStringify);

  const parsed = processor.parse(content);
  const hastTree = (await processor.run(parsed)) as Root;
  const toc: TocItem[] = getToc(hastTree);
  const obsidianLinks: ObsidianLinks = getObsidianGraphData(slug, title, hastTree);
  console.log(obsidianLinks);

  return { contentHtml: processor.stringify(hastTree), toc, obsidianLinks };
};
