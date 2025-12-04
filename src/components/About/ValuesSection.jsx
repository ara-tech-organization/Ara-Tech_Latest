import React from "react";
import styles from "./ValuesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    id: "passion",
    icon: faBullseye,
    title: "Our Passion",
    text:
      "Building intuitive digital ecosystems that empower brands, connect people, and scale faster than ever imagined.",
  },
  {
    id: "belief",
    icon: faLightbulb,
    title: "Our Belief",
    text:
      "Everything we create is built on empathy, strategy, and simplicity — making tech feel like second nature.",
  },
];

export default function ValuesSection() {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="values-heading">
      <div className={styles.backdrop} aria-hidden />

      <div className={styles.container}>
        <h2 id="values-heading" className={styles.heading}>
          What Drives Us
        </h2>

        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={c.icon} className={styles.icon} />
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.text}>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
