"use client";
import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Burger from "../burger/Burger";

const Header = () => {
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
        <div className={styles.title}>
          <Link href="/" className="text">
            <h1>
              <b>Marg</b>
              <b className="accent">uels</b>
            </h1>
          </Link>
        </div>
        <nav>
          <div className={styles.burger}>
            <Burger isOpen={isOpen} toggleMenu={toggleMenu} grid={true}/>
          </div>
          <ul>
            <li>
              <Link href="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link href="/about#experience" className="link">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/blog" className="link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
