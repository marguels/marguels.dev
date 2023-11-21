"use client";
import React from "react";
import styles from "./about.module.css";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h1 className={`accent ${styles.sectionTitle}`}>About</h1>
      <div className="outline-max"></div>
      <div className={styles.aboutContent}>
        <div className={styles.intro}>
          <h2>Welcome to my little digital garden 🌱</h2>
          My name is Margherita, and I'm the curator of this little space of the
          internet.
          <br />
          <br />
          I've been around here, on the web, soaking up on knowledge, for as far
          as I can remember. As I grew and studied, I've decided to claim my own
          space of this strange, magical place us humans from all around the
          world have built, where each brick was foundational for something
          always bigger.
          <br />I was convinced that it was time to claim my own space when I
          stumbled upon the idea of a{" "}
          <Link
            href={
              "https://tomcritchlow.com/2019/02/17/building-digital-garden/"
            }
            target="_blank"
          >
            digital garden
          </Link>
          .
          <br />
          <br />
          Mostly, this space is an excercise to organize my own knowldege. If my
          efforts are helpful to anyone out there, that would make me more than
          happy!
          <br />
          <br />
        </div>
        <div className={styles.imageBox}>
          <img src="/assets/avatar.png" alt="hero" className={styles.picture} />
          <p>
            🌍 <b>Amsterdam</b>, The Netherlands
          </p>
        </div>
        <div className={styles.aboutText}>
          <h3>About me</h3>
          👩🏻‍💻 Currently, I work as a Backend Software Engineer at{" "}
          <Link href={"https://www.elsevier.com"}>Elsevier</Link>), empowering
          researchers navigating the intricate world of publications through
          Scopus. I have been working in this stimulating team for over 3 years
          as a Back end developer, embarking in the journey of migrating a 15
          years old Monolithic application and building awesome micro services
          and entire full-stack features.
          <br />
          <br />
          🤖 I spend my free time working on a lot of different projects.
          Studying, building and creating is what keeps that light in me. I like
          to level up my programming skills and tie them all together, using
          coding as a medium to convey my thoughts and creative ideas.
          <br />
          <br />
          🌌 I have a background in Theoretical Physics (M.Sc.), with a research
          thesis in Cosmology investigating the Quantum fluctuations caused by
          Inflation in the early universe. It's a fascinating world sitting in
          the intersection between the big philosophical questions around the
          interpretation of Quantum Mechanics, General Relativity and of course
          some incomprehensible non-equilibrium mathematical models.
          <br />
          <br />
          🧠 For some extra geeky stuff, just know that you can visit my brain
          (or a more organised version of it). I've spent years soaking up
          knowledge, researching, and dissecting every topic I could get my
          hands on. Now, I've got this treasure trove of notes that I can't wait
          to share with everyone out there. If you're curious and hungry for
          some mind-blowing insights, swing by{" "}
          <Link href={"/blog"}>my knowledge hub</Link> and get a taste of the
          bits of knowledge I've gathered along the way!
        </div>
      </div>
    </section>
  );
};

export default About;
