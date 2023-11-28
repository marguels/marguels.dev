"use client";
import styles from "./blogNav.module.css";
import BlogNavElement from "./BlogNavElement";

const BlogNav = () => {
  return (
    <div className={styles.blogNav}>
      <h2 className={styles.navTitle}>🚧 NOTES 🚧</h2>
      <div className={styles.elements}>
        <BlogNavElement
          title="Projects 🛠️"
          childrenLinks={[
            { title: "Digital Garden in NextJS", href: "/blog/digital-garden" },
            { title: "Chat with your Obsidian", href: "/projects/subproject2" },
          ]}
        />
        <BlogNavElement
          title="Programming 💻"
          childrenLinks={[
            { title: "Subproject 1", href: "/projects/subproject1" },
            { title: "Subproject 2", href: "/projects/subproject2" },
          ]}
        />
        <BlogNavElement
          title="Obsidian 🧿"
          childrenLinks={[
            { title: "How I use Obsidian", href: "/blog/obsidian" },
            {
              title: "Organization system",
              href: "/blog/organising-knowledge",
            },
            { title: "Note taking", href: "/blog/note-taking" },
          ]}
        />
        <BlogNavElement
          title="The Humdrums 🥁"
          childrenLinks={[
            { title: "Subproject 1", href: "/blog/subproject1" },
            { title: "Subproject 2", href: "/projects/subproject2" },
          ]}
        />
      </div>
    </div>
  );
};

export default BlogNav;
