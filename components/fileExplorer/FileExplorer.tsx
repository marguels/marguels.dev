"use client";
import styles from "./explorer.module.css";
import Folder from "./Folder";
import { PostMetadata } from "@/interfaces/post";

interface FileExplorerProps {
  data: PostMetadata[];
}

const FileExplorer = ({ data } : FileExplorerProps) => {

  const groupedPosts = data.reduce((acc, post) => {
    const { category } = post;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({title: post.title, slug: post.slug});
    return acc;
  }, {} as Record<string, Record<string, string>[]>);

  return (
    <div className={styles.blogNav}>
      <h2 className={styles.navTitle}>NOTES</h2>
      <div className={styles.elements}>
        {groupedPosts && Object.keys(groupedPosts).map((category) => {
          return (
            <Folder title={category} childrenLinks={groupedPosts[category]} />
          );
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
