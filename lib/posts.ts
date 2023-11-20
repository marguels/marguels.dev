import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import { Plugin, Transformer, unified } from "unified";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import headings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Element, Root } from "hast";
import { toString } from "hast-util-to-string";
import { PostContent, TocItem } from "@/interfaces/post";
import remarkEmbedImages from "remark-embed-images";
import { visit } from "unist-util-visit";
import rehypeRaw from "rehype-raw";
import { Node } from 'unist';
import { selectAll } from "hast-util-select";

const postsDirectory = path.join(process.cwd(), "_posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostMetadata = () => {
  const files = fs.readdirSync(postsDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${postsDirectory}/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export const getPostContent = async (slug: string): Promise<PostContent> => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { contentHtml, toc } = await processContent(content);

  return {
    slug,
    ...(data as { date: string; title: string; excerpt: string; }),
    contentHtml,
    toc,
  };
};

export const loadPageContent = async (fullPath: string) => {
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { contentHtml, toc } = await processContent(content);

  return {
    ...(data as { date: string; title: string; excerpt: string; }),
    contentHtml,
    toc,
  };
}

const addToc = (tree: Root): TocItem[] => {
  return tree.children
    .filter(
      (node): node is Element =>
        node.type === "element" &&
        (node.tagName === "h1" ||
          node.tagName === "h2" ||
          node.tagName === "h3")
    )
    .map((node) => ({
      id: node.properties.id as string,
      text: toString(node),
      depth: node.tagName.charCodeAt(node.tagName.length - 1) - '1'.charCodeAt(0),
    }));
};

const addClassToImages: Plugin = (): Transformer => {
  return (tree: Node): Node => {
    visit(tree, 'element', (node: Node) => {
      if (isElement(node) && node.tagName === 'img') {
        node.properties.className = ['post-image'];
      }
    });
    return tree;
  };
};

function isElement(node: Node): node is Element {
  return 'tagName' in node && 'properties' in node;
}

export const processContent = async (
  content: string
): Promise<{ contentHtml: string; toc: TocItem[] }> => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(remarkEmbedImages)
    .use(rehypeRaw)
    .use(addClassToImages)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(headings, { behavior: "wrap" })
    .use(rehypeStringify);

  const parsed = processor.parse(content);
  const hastTree = await processor.run(parsed) as Root;
  const toc: TocItem[] = addToc(hastTree);

  return { contentHtml: processor.stringify(hastTree), toc };
};


