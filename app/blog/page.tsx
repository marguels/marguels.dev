import { getAllPostsMetadata } from "@/lib/posts";
import PostCard from "@/components/postCard/PostCard";
import Link from "next/link";

export default function BlogPage() {
  const postMetadata = getAllPostsMetadata();
  const tags: string[] = [];
  const postPreviews = postMetadata.map((post) => {
    tags.push(...post.tags);
    return <PostCard key={post.slug} post={post} />;
  });
  const uniqueTags = [...new Set(tags)];
  return (
    <div className="blog-container">
      <div className="blog-intro">
        <h1 className="blog-title">
          Connecting the <b className="accent">Dots</b>
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
      <div className="blog-organisation">
        <div className="description-container">
          <h3 className="blog-organisation-title">Organisation system</h3>
          <p className="blog-organisation-text">
            If you want to learn more about the system I adopt (or the experiments I do) to organise my knowledge, head over to{" "}<Link href="/blog/organising-knowledge" className="link">this page</Link>.
          </p>
          <h4>I keep notes about</h4>
          <ul className="primary-list">
            <li>
              🔧{" "}
              <Link href="/projects" className="blog-link inactive-link">
                Projects
              </Link>
            </li>
            <li>
              💻{" "}
              <Link href="/programming" className="blog-link inactive-link">
                Programming
              </Link>
            </li>
            <li>
              🧿{" "}
              <Link href="/blog/llm" className="blog-link inactive-link">
                Large Language Models
              </Link>
            </li>
            {/* <li>
              🤖{" "}
              <Link href="/blog/game-dev" className="blog-link inactive-link">
                Game development
              </Link>
            </li>
            <li>
              💫{" "}
              <Link href="/blog/llm" className="blog-link inactive-link">
                Physics
              </Link>
            </li>
            <li>
              📝{" "}
              <Link href="/blog/llm" className="blog-link inactive-link">
                Math
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="description-container">
          <h3 className="blog-organisation-title">🚧 Explore by tags 🚧</h3>
          <div className="tags-container">
            {uniqueTags.map((tag, index) => (
              <button key={index} className={`pill tag-${index%8}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="outline-max" />
      <div className="recent-posts">
        <h2>Recently updated</h2>
        <div className="post-cards-container">{postPreviews}</div>
      </div>
    </div>
  );
}
