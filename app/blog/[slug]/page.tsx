import { getPostContent, getAllPostsMetadata } from "@/lib/posts";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import { PostContent } from "@/components/postContent/PostContent";
import NetworkGraph from "@/components/networkGraph/NetworkGraph";

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const postData = await getPostContent(slug);
  return (
    <div className="post-container">
      {postData.sidebar ? <Sidebar toc={postData.toc} /> : ''}
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
      {postData.obsidianLinks.links.length > 0 ? <NetworkGraph data={postData.obsidianLinks}/>: ''}
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
