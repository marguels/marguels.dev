"use client";
import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import BackgroundAnimation from "../BackgroundAnimation";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundAnimation}>
        <BackgroundAnimation />
      </div>
      <div className={styles.heroContent}>
        <h1>
          Hi, I'm <b className="accent">Margherita</b>!
        </h1>
        <p className={styles.subtitle}>
          Welcome to my corner of the internet.
          <br />
          This is a space for sharing and trying to{" "}
          <b className="accent">connect the dots</b>
          .<br />
        </p>
        <div>
          <Link href="/blog">
            <button className={styles.heroButton}>Digital garden 🪴</button>
          </Link>
          <button
            className={styles.altButton}
            onClick={() =>
              (window.location.href = "mailto:marguels.dev@gmail.com")
            }
          >
            Contact me 📬
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
