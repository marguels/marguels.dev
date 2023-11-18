import { getPostContent, getPostMetadata } from "../../../lib/posts";
import Link from "next/link";
import "katex/dist/katex.min.css";
import Sidebar from "@/components/sidebar/Sidebar";

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const postData = await getPostContent(slug);
  return (
    <div className="post-container">
      <Sidebar toc={postData.toc} />
      <div className="post-content">
        <Link href="/blog">
          <h1>{postData.title}</h1>
        </Link>
        <article>
          <Date>{postData.date}</Date>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
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
