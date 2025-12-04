import React from "react";
import styles from "./HeroIntro.module.css";

export default function HeroIntro() {
  return (
    <section data-aos="fade-up"
  className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.pattern} aria-hidden />
      <div className={styles.container}>
        <h1 id="hero-title" className={styles.title}>
          Let’s Build the Future Together
        </h1>

        <p className={styles.subtitle}>
          We believe in building long-term relationships, not just products. Whether you're looking to
          build a new app, optimize operations, or innovate with AI, Ara Technologies is your trusted
          partner on the digital journey.
        </p>
      </div>
    </section>
  );
}
