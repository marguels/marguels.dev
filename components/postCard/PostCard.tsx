import { PostMetadata } from "@/interfaces/post";
import Link from "next/link";
import styles from "./postcard.module.css";
import { GrowthEnum } from "@/lib/posts";

const PostCard = ({ post }: { post: PostMetadata }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/blog/${post.slug}`} className={styles.cardTitle}>{post.title}</Link>
      <div className={styles.cardDescription}>{post.excerpt}</div>
      <div className={styles.growth}>{GrowthEnum[post.growth]}</div>
    </div>
  );
};

export default PostCard;
