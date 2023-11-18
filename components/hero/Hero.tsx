"use client";
import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>
          Hi, I'm <b className="accent">Margherita</b>!
        </h1>
        <p>
          Welcome to my corner of the internet,
          <br /> my space for sharing and trying to{" "}
          <Link href="/blog">
            <b className="accent">connect the dots</b>
          </Link>
          .<br />
        </p>
        <button
          className={styles.heroButton}
          onClick={() =>
            (window.location.href = "mailto:marguels.dev@gmail.com")
          }
        >
          Contact me
        </button>
      </div>
      <div className={styles.heroImage}>
        <img src="/images/avatar.png" alt="hero" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
