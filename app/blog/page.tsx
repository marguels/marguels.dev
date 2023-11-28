import { getAllPostsMetadata } from "@/lib/posts";
import PostCard from "@/components/postCard/PostCard";
import Link from "next/link";
import styles from "./blogpage.module.css";
import NetworkGraph from "@/components/networkGraph/NetworkGraph";
import BlogNav from "@/components/blogNav/BlogNav";

const mockData = {
  nodes: [
    {
      id: "note-taking",
      name: "note-taking",
      parent: false,
      title: "Note taking",
    },
    {
      id: "organising-knowledge",
      name: "a different chaos",
      parent: false,
      title: "Organisation system\n",
    },
    {
      id: "obsidian-templates",
      name: "custom templates",
      parent: false,
      title: "",
    },
    {
      id: "obsidian",
      name: "Obsidian",
      parent: true,
      title: "Obsidian\n",
    },
  ],
  links: [
    { source: "obsidian", target: "note-taking" },
    { source: "obsidian", target: "organising-knowledge" },
    { source: "obsidian", target: "obsidian-templates" },
  ],
};

export default function BlogPage() {
  const postMetadata = getAllPostsMetadata();
  const tags: string[] = [];
  const postPreviews = postMetadata.map((post) => {
    tags.push(...post.tags);
    return <PostCard key={post.slug} post={post} />;
  });
  const uniqueTags = [...new Set(tags)];
  return (
    <div className={styles.contentLayout}>
      <BlogNav />
      <div className={styles.mainContent}>
        <div className={styles.blogDescription}>
          <h1 className="blog-title">
            Connecting the <span className="accent">Dots</span>
          </h1>

          <p>
            This is a place where I slowly curate and organise information I
            collect along my journey.
            <br />
            <br />
            The idea of a{" "}
            <Link href={"/blog/digital-garden"}>digital garden</Link> has
            changed the way I approach knowledge organisation on the web. I'm
            trying to break free from the idea of a blog, and its search and
            navigation style, as it wouldn't be useful for the exercise of
            keeping a digital garden.
            <br />
            <br />I want to offer an hybrid approach between graph visualization
            and some loosely coupled folders. I love Obsidian's graph function
            when it comes about <i>exploring</i>, but I don't use it to search a
            specific piece of information. If you're curious about the system I
            adopt (or the experiments I do) to organise my knowledge, head over
            to{" "}
            <Link href="/blog/organising-knowledge" className="link">
              this page
            </Link>
            .
            <br />
            <br />
            Mostly, this space is an excercise to organize my own knowldege. If
            my efforts are helpful to anyone out there, that would make me more
            than happy!
            <br />
            <br />
            
          </p>
        </div>
        <div className="ccc">🌱🌿🪴🌳🌲</div>
        <div className="recent-posts">
          <h2>Recently updated</h2>
          <div className={styles.allPosts}>{postPreviews}</div>
        </div>
      </div>
      <div className={styles.graph}>
        <NetworkGraph data={mockData} />
      </div>
    </div>
  );
}
