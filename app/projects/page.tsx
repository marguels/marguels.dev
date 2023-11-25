import { getAllPostsMetadata } from "@/lib/posts";
import PostCard from "@/components/postCard/PostCard";

export default function ProgrammingPage() {
  const postMetadata = getAllPostsMetadata();
  const tags: string[] = [];
  const postPreviews = postMetadata.map((post) => {
    tags.push(...post.tags);
    return <PostCard key={post.slug} post={post} />;
  });

  return (
    <div className="blog-container">
      <div className="blog-intro">
        <h1 className="blog-title">
          Projects
        </h1>
        <div className="blog-description">
          <p>Welcome to my digital garden 🌱</p>
          <p>
            {" "}
            This is a place where I slowly curate and organise information I
            collect along my journey.
          </p>
        </div>
      </div>
      <div className="outline-max" />
      <div className="ccc">
        🚧 This page is a work in progress 🚧
      </div>
    </div>
  );
}
