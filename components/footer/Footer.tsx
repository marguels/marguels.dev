import GitHubIcon from "../icons/GitHubIcon";
import IconLinkedin from "../icons/LinkedInIcon";
import IconMail from "../icons/MailIcon";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h3 className={styles.contacts}>Contacts</h3>
        <ul>
          <li>
             <Link href="github.com/margheritagambino" className="link-alt">GitHub</Link>
          </li>
          <li>
             <Link href="linkedin.com/in/margheritagambino" className="link-alt">LinkedIn</Link>
          </li>
          <li>
            󰇰 <Link href="mailto:margherita.gambino@gmail.com" className="link-alt">Email</Link>
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
        with a <Link href="https://github.com/catppuccin">Catppuccin</Link>'s Macchiato soothing theme,
        and inspired largely by <Link href="https://obsidian.md/">Obsidian</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;
