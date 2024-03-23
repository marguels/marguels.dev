import BlogHeader from "@/components/blogHeader/BlogHeader";
import FileExplorer from "@/components/fileExplorer/FileExplorer";
import { getAllPostsMetadata } from "@/lib/posts";
import styles from "./blogpage.module.css";

export const metadata: { title: string; description: string } = {
  title: "Marguino",
  description: "A place for my notes and thoughts",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const postMetadata = getAllPostsMetadata();

  return (
        <div className={styles.blogLayout}>
          <BlogHeader/>
          <FileExplorer data={postMetadata} />
        {children}
        </div>
  );
}
