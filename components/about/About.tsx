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
    <section id="about" className={styles.aboutContainer} >
      <h1  className="accent">About me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.imageBox}>
          <img
            src="/images/pro_pic.jpeg"
            alt="picture"
            className={styles.picture}
          />
          <p>🌍 Amsterdam, The Netherlands</p>
        </div>
        <div  className={styles.aboutText}>
        Welcome to my personal space 🚀
          <br />
          My name is Margherita and I'm an all round geek. 👩🏻‍🔬 <br/>
          <br />
          I like to study and I like to write. I like to learn and I like to teach.<br/>
          I like to code and I like to design. I like to create and I like to destroy.<br/>
          I like to build and I like to break. 
          I like to be a <b className="accent">full-stack developer</b>.<br/><br/>
          👩🏻‍💻 Currently, I work as a Software Engineer at <Link href="elsevier">Elsevier</Link>, empowering researchers navigating the intricate world of
          publications through Scopus. I have been working in this stimulating
          team for over 3 years as a Back end developer, embarking in the
          journey of migrating a 15 years old Monolithic application and
          building awesome micro services and entire full-stack features.<br/><br/>
          🌌 I have a background in Theoretical Physics (M.Sc.), with a
          research thesis in Cosmology investigating the Quantum fluctuations
          caused by Inflation in the early universe. It's a fascinating world
          sitting in the intersection between the big philosophical questions
          around the interpretation of Quantum Mechanics, General Relativity and
          of course some incomprehensible non-equilibrium mathematical models.<br/><br/>
          📊 I'm also studying part-time to get a better grip around
          the world of Data Science. I've always loved looking at numbers and
          trying to make sense out of them. This world gives me a chance to
          converge all my passions: answering big questions with the help of
          math and coding.<br/><br/>
          📝 For some extra geeky stuff, just know that
          I'm all about diving deep into the fascinating world of science. I've
          spent years soaking up knowledge, researching, and dissecting every
          topic I could get my hands on. Now, I've got this treasure trove of
          notes that I can't wait to share with everyone out there. If you're
          curious and hungry for some mind-blowing insights, swing by <Link href="/blog">my blog</Link> and get a taste of the bits of knowledge I've gathered along the way!.
        </div>
      </div>
    </section>
  );
};

export default About;
