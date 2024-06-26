import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ObsidianLinks, PostContent, PostMetadata } from "@/interfaces/post";
import { processContent } from "./processors/contentProcessing";

const postsDirectory = path.join(process.cwd(), "_posts");
const graphDataDirectory = path.join(process.cwd(), "_data");

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

export const getAllPostsSlug = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getAllPostsMetadata = () : PostMetadata[] => {
  const files = fs.readdirSync(postsDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${postsDirectory}/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    const tags = matterResult.data.tags ? matterResult.data.tags.split(",") : [];
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      sidebar: matterResult.data.sidebar,
      growth: matterResult.data.growth,
      slug: fileName.replace(".md", ""),
      tags: tags || [],
      category: matterResult.data.category,
    };
  });
  return posts;
};

export const getPostMetadataBySlug = (slug: string) : PostMetadata | null | undefined => {
  try {
    const fileContents = fs.readFileSync(
      path.resolve(postsDirectory, `${slug}.md`),
      'utf8'
    );
   
    const matterResult = matter(fileContents);
      const tags = matterResult.data.tags ? matterResult.data.tags.split(",") : [];
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        sidebar: matterResult.data.sidebar,
        growth: matterResult.data.growth,
        slug: slug,
        tags: tags || [],
        category: matterResult.data.category,
      };
  } catch (error) {
    if(error instanceof Error) {
      console.error(`Failed to read file ${slug}.md: ${error.message}`);
      return null;
    }
  }
};

export const getPostsByTag = (tag: string): PostMetadata[] => {
  const allPosts = getAllPostsMetadata();
  const postsByTag = allPosts.filter((post) => post.tags.includes(tag));
  return postsByTag;
};

export const getPostContent = async (slug: string): Promise<PostContent> => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { contentHtml, toc, obsidianLinks } = await processContent(slug, data.title, content);
  
  return {
    slug,
    ...(data as { date: string; title: string; excerpt: string; sidebar: boolean }),
    contentHtml,
    toc,
    obsidianLinks,
  };
};

export const getGraphData = async (): Promise<ObsidianLinks> => {
  const graphDataPath = path.join(graphDataDirectory, 'graphData.json');
  return JSON.parse(await fs.readFileSync(graphDataPath, 'utf-8'));
}

export enum GrowthEnum {
  "Seedling 🌱",
  "Sprout 🌿",
  "Sapling 🪴",
  "Bush 🌳",
  "Tree 🌲",
}

