import { getPostContent, getPostMetadata } from "../../../lib/posts";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import { PostContent } from "@/components/postContent/PostContent";
import NetworkGraph from "@/components/networkGraph/NetworkGraph";

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const postData = await getPostContent(slug);
  return (
    <div className="post-container">
      <Sidebar toc={postData.toc} />
      <div className="post-content">
        <div className="post-header">
          <Link href="/blog" className="back-link">Back to blog</Link>
          <h1>{postData.title}</h1>
          <h3>{postData.excerpt}</h3>
          <Date>{postData.date}</Date>
        </div>
        <div className="outline-max"/>
        <article>
          <PostContent contentHtml={postData.contentHtml} />
        </article>
      </div>
      <NetworkGraph data={postData.obsidianLinks}/>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default PostPage;
