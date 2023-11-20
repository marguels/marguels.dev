"use client";
import Link from "next/link";
import styles from "./burger.module.css";

const Menu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
        <Link href="/#about" className={`link ${styles.menuItem}`} onClick={closeMenu}>
            About
        </Link>
        <Link href="/#experience" className={`link ${styles.menuItem}`} onClick={closeMenu}>
            Experience
        </Link>
        <Link href="/blog" className={`link ${styles.menuItem}`} onClick={closeMenu}>
            Blog
        </Link>
    </div>
  );
};

export default Menu;
