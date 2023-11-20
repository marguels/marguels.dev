'use client';
import styles from "./header.module.css"
import ScrollProgress from "./ScrollProgress"
import Link from "next/link";

const Header = () => {
    return ( 
    <header className={styles.headerContainer}>
        <div className={styles.navbar}>
          <Link href="/" className="text">
            <h1><b>Marg</b><b className="accent">uels</b></h1>
            </Link>
          <nav>
            <ul>
              <li>
                <Link href="/#about" className="link">About</Link>
              </li>
              <li>
                <Link href="/#experience" className="link">Experience</Link>
              </li>
              <li>
                <Link href="/blog" className="link">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <ScrollProgress/>
      </header>)
}

export default Header;