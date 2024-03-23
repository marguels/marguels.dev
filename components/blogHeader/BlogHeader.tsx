"use client";
import { useState } from "react";
import styles from "./blogHeader.module.css";
import Link from "next/link";
import Burger from "../burger/Burger";
import Menu from "../burger/Menu";
import ScrollProgress from "../header/ScrollProgress";

const BlogHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbar}>
        <Link href="/blog" className={`text ${styles.title}`}>
          <h1>
            Connecting the <span className="accent">Dots</span>
          </h1>
        </Link>
        <>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} grid={true} />
          <Menu isOpen={isOpen} closeMenu={closeMenu}/>
        </>
      </div>
      <ScrollProgress />
    </header>
  );
};

export default BlogHeader;
