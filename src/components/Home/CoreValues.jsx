import React from "react";
import styles from "./CoreValues.module.css";

const values = [
  {
    key: "innovation",
    title: "Innovation",
    desc: "We experiment fearlessly and build for tomorrow.",
    // simple inline SVG (lightbulb)
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M9 21h6v-1H9v1z" fill="currentColor" />
        <path d="M12 2a6 6 0 00-4 10.7V15a1 1 0 001 1h6a1 1 0 001-1v-2.3A6 6 0 0012 2z" fill="currentColor" opacity="0.95"/>
      </svg>
    ),
  },
  {
    key: "integrity",
    title: "Integrity",
    desc: "We do the right thing — always honest and fair.",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 21s8-4.5 8-10A8 8 0 004 11c0 5.5 8 10 8 10z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "excellence",
    title: "Excellence",
    desc: "We raise the bar and deliver craft-driven results.",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l2.7 6.1L21 9.2l-5 3.9L17.3 21 12 17.8 6.7 21 8 13.1 3 9.2l6.3-1.1L12 2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "customer-first",
    title: "Customer First",
    desc: "We put people at the center of every decision.",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.4 0-8 2.2-8 4.9V22h16v-3.1c0-2.7-3.6-4.9-8-4.9z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="core-values-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>The Heart of Our Mission</p>
          <h2 id="core-values-heading" className={styles.title}>
            Core <span className={styles.titleAccent}>Values</span>
          </h2>
          <p className={styles.lead}>
            Guiding principles that shape the way we work and the impact we deliver.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {values.map((v, i) => (
           <li key={v.key} className={styles.card} style={{ "--delay": `${i * 80}ms` }}>

              <div className={styles.iconWrap} aria-hidden>
                <div className={styles.halo} />
                <div className={styles.icon}>{v.icon}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
