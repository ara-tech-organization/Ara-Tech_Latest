import React from "react";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  const socials = ["LinkedIn", "Instagram", "YouTube", "X"];

  return (
    <section data-aos="fade-up"
 className={styles.section}>
      <p className={styles.subtext}>Explore Our Journey</p>
      <ul className={styles.links}>
        {socials.map((name, index) => (
          <li key={index}>
            <a href="#" className={styles.link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
