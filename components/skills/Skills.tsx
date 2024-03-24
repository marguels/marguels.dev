import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaLinux,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiAwslambda,
  SiDocker,
  SiHelm,
  SiKubernetes,
  SiNewrelic,
  SiOpenai,
  SiPostgresql,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section id="experience">
      <h1 className={styles.sectionTitle}>Experience</h1>
      <div className="outline-max"></div>
      <div className={styles.skillsSection}>
        <div className={styles.experience}>
          <p>
            I've been working in the tech industry for 5 years, and I've been
            lucky enough to work with a variety of technologies and tools.
            Here's a carousel of the technologies I've worked with in the past:
          </p>
        </div>
        <div className={styles.skillsGrid}>
          <button className={styles.iconContainer}>
            <FaPython size="50px" />
            <span>Python</span>
          </button>
          <button className={styles.iconContainer}>
            <SiOpenai size="50px" />
            <span>OpenAI</span>
          </button>
          <button className={styles.iconContainer}>
            <FaJava size="50px" />
            <span>Java</span>
          </button>
          <button className={styles.iconContainer}>
            <SiSpringboot size="50px" />
            <span>Spring Boot</span>
          </button>
          <button className={styles.iconContainer}>
            <SiSpring size="50px" />
            <span>Spring</span>
          </button>
          <button className={styles.iconContainer}>
            <SiDocker size="50px" />
            <span>Docker</span>
          </button>
          <button className={styles.iconContainer}>
            <SiAwslambda size="50px" />
            <span>AWS Lambda</span>
          </button>
          <button className={styles.iconContainer}>
            <SiAmazonaws size="50px" />
            <span>AWS</span>
          </button>
          <button className={styles.iconContainer}>
            <SiPostgresql size="50px" />
            <span>PostgreSQL</span>
          </button>
          <button className={styles.iconContainer}>
            <SiKubernetes size="50px" />
            <span>Kubernetes</span>
          </button>
          <button className={styles.iconContainer}>
            <SiHelm size="50px" />
            <span>Helm</span>
          </button>
          <button className={styles.iconContainer}>
            <FaJenkins size="50px" />
            <span>Jenkins</span>
          </button>
          <button className={styles.iconContainer}>
            <SiNewrelic size="50px" />
            <span>New Relic</span>
          </button>
          <button className={styles.iconContainer}>
            <FaReact size="50px" />
            <span>React</span>
          </button>
          <button className={styles.iconContainer}>
            <FaNode size="50px" />
            <span>Node.js</span>
          </button>
          <button className={styles.iconContainer}>
            <BiLogoTypescript size="50px" />
            <span>TypeScript</span>
          </button>
          <button className={styles.iconContainer}>
            <FaGitAlt size="50px" />
            <span>Git</span>
          </button>
          <button className={styles.iconContainer}>
            <FaLinux size="50px" />
            <span>Linux</span>
          </button>
          <button className={styles.iconContainer}>
            <FaCss3Alt size="50px" />
            <span>CSS</span>
          </button>
          <button className={styles.iconContainer}>
            <FaHtml5 size="50px" />
            <span>HTML</span>
          </button>
        </div>
        <div className={styles.writing}>
            I have a passion for writing, and I've embarked on the lifelong journey of <span className="highlight">building my second brain </span>🧠.
            Currently, I document all my work thoroughly in <a href="https:/www.obsidian.md" target="_blank" className="link-alt">Obsidian</a>.<br/>
            This 3-years-long experiment has been transormative in every aspect of my work.<br/>
            I am a developer who values writing <span className="highlight">clear documentation</span>, written with the intention of being shared.
            Truth be told, code should be readable thanks to good naming.
            But all the documentation I've produced about all things around work has been a boost!
        </div>
        <a className={styles.cvButton} href="/assets/Margherita-Gambino_ENG-CV.pdf" download>Download my CV</a>
      </div>
    </section>
  );
};

export default Skills;
