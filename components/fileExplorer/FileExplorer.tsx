"use client";
import { useState } from "react";
import styles from "./explorer.module.css";
import Folder from "./Folder";
import { PostMetadata } from "@/interfaces/post";

interface FileExplorerProps {
  data: PostMetadata[];
}

const FileExplorer = ({ data } : FileExplorerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const groupedPosts = data.reduce((acc, post) => {
    const { category } = post;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({title: post.title, slug: post.slug});
    return acc;
  }, {} as Record<string, Record<string, string>[]>);

  return (
    <>
      <button onClick={toggleSidebar} className={`${styles.toggleButton} ${isOpen ? styles.open : styles.close}`}>
        {isOpen ? '' : ''}
      </button>
    <div className={`${styles.blogNav} ${isOpen ? styles.open : styles.close}`}>
      <h2 className={styles.navTitle}>NOTES</h2>
      <div className={styles.elements}>
        {groupedPosts && Object.keys(groupedPosts).map((category) => {
          return (
            <Folder title={category} childrenLinks={groupedPosts[category]} />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default FileExplorer;
