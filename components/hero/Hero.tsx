import React from "react";
import styles from "./hero.module.css"

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="hero-content">
        <h1>Hi, I'm Margherita!</h1>
        <p>Welcome to my personal space where I share my knowledge,<br/> my projects, and where I try to connect the dots.</p>
      </div>
    <div className="hero-image">
        <img src="/images/hero.svg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
