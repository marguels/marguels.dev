"use client";
import { useState } from "react";
import styles from "./explorer.module.css";
import Link from "next/link";

interface FolderProps {
  title: string;
  childrenLinks: Record<string,string>[];
}



const Folder = ({ title, childrenLinks }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const elements = childrenLinks.map((link) => {
    return (
      <li>
        <Link href={"/blog/" + link.slug} className={styles.navLink}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.navElement}>
      <div onClick={toggleOpen} className={styles.folder}>
        <div className={styles.folderIcon}>{isOpen? '󰝰' : '󰉋'}</div>
        {title}
      </div>
      {isOpen && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default Folder;
