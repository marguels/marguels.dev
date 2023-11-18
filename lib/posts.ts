import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import { unified } from "unified";
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

const postsDirectory = path.join(process.cwd(), "_posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
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
    ...(data as { date: string; title: string }),
    contentHtml,
    toc,
  };
};

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

const processContent = async (
  content: string
): Promise<{ contentHtml: string; toc: TocItem[] }> => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(headings, { behavior: "wrap" })
    .use(rehypeStringify);

  const parsed = processor.parse(content);
  const hastTree = await processor.run(parsed);
  const toc: TocItem[] = addToc(hastTree);

  return { contentHtml: processor.stringify(hastTree), toc };
};
