import GitHubIcon from "../icons/GitHubIcon";
import IconLinkedin from "../icons/LinkedInIcon";
import IconMail from "../icons/MailIcon";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contacts}>
        <h2 className="text">Contacts</h2>
        <div className={styles.outline}></div>
        <div className={styles.iconsContainer}>
          <Link href="https://github.com/marguels" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href="mailto:marguels.dev@gmail.com" target="_blank">
            <IconMail />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/margherita-gambino/"}
            target="_blank"
          >
            <IconLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
