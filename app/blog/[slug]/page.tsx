import { getPostContent, getAllPostsMetadata } from "@/lib/posts";
import Link from "next/link";
import Sidebar from "@/components/toc/Toc";
import { PostContent } from "@/components/postContent/PostContent";
import NetworkGraph from "@/components/networkGraph/NetworkGraph";
import styles from "./post.module.css";

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const postData = await getPostContent(slug);
  return (
    <div className={styles.postContainer}>
      <div className={styles.fileExplorer}/>
      
      <div className={styles.postContent}>
        <div className="post-header">
          <Link href="/blog" className={styles.backLink}>Back to blog</Link>
          <h1 className={styles.postTitle}>{postData.title}</h1>
          <div className={styles.postMetadata}>
          <h3>{postData.excerpt}</h3>
            <Date>{postData.date}</Date>
          </div>
        </div>
        <div className="outline-max"/>
        <article>
          <PostContent contentHtml={postData.contentHtml} />
        </article>
      </div>
      <div className={styles.contentExplorer}>
      {postData.obsidianLinks.links.length > 0 ? 
          <NetworkGraph data={postData.obsidianLinks}/> 
         : ''}
      {postData.sidebar ?
        <Sidebar toc={postData.toc} />
        : ''}
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getAllPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default PostPage;
