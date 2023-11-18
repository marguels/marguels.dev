import styles from "./header.module.css"
import ScrollProgress from "./ScrollProgress"
import Link from "next/link";

const Header = () => {
    return ( 
    <header className={styles.headerContainer}>
        <div className={styles.navbar}>
          <Link href="/"><h1>Marguino</h1></Link>
          <nav>
            <ul>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#experience">Experience</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <ScrollProgress/>
      </header>)
}

export default Header;