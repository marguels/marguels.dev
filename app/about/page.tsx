import styles from "./aboutPage.module.css";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
          <About />
          <Skills />
      </div>
    </>
  );
}
