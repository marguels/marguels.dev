import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostContent } from "@/interfaces/post";
import { processContent } from "./processors/contentProcessing";
import exp from "constants";

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

export const getPostTitleFromSlug = (slug: string) => {

};

export const getPostContent = async (slug: string): Promise<PostContent> => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { contentHtml, toc, obsidianLinks } = await processContent(slug, data.title, content);
  
  return {
    slug,
    ...(data as { date: string; title: string; excerpt: string; }),
    contentHtml,
    toc,
    obsidianLinks,
  };
};


