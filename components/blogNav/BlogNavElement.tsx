"use client";
import { useState } from "react";
import styles from "./blogNav.module.css";
import Link from "next/link";

type BlogNavElementProps = {
  title: string;
  childrenLinks: { title: string; href: string }[];
};

const BlogNavElement = ({ title, childrenLinks }: BlogNavElementProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const elements = childrenLinks.map((link) => {
    return (
      <li>
        <Link href={link.href} className={styles.navLink}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.navElement}>
      <div onClick={toggleOpen} className={styles.folder}>
        <svg
          className={`${styles.folderIcon} ${isOpen ? styles.open : ''}`}
          width="0.6rem"
          height="0.6rem"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
        </svg>
        {title}
      </div>
      {isOpen && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default BlogNavElement;
