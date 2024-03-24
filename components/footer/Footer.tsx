import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h3 className={styles.contacts}>Contacts</h3>
        <ul>
          <li>
             <Link href="https://github.com/marguels" className="link-alt" target="_blank">GitHub</Link>
          </li>
          <li>
             <Link href="https://linkedin.com/in/margherita-gambino" className="link-alt" target="_blank">LinkedIn</Link>
          </li>
          <li>
            󰇰 <Link href="mailto:marguels.dev@gmail.com" className="link-alt">Email</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.about}>Links</h3>
        <ul>
          <li>
           <Link href="/" className="link-alt">Home</Link>
          </li>
          <li>
          󱁷 <Link href="/about" className="link-alt">About me</Link>
          </li>
          <li>
           <Link href="/about#projects" className="link-alt">Projects</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.info}>Credits</h3>
        <p>This blog is made with Next.js,
        inspired largely by <Link href="https://obsidian.md/">Obsidian</Link>{" "}
        and infused with <Link href="https://github.com/catppuccin">Catppuccin</Link>'s Macchiato soothing theme.</p>
      </div>
    </footer>
  );
};

export default Footer;
