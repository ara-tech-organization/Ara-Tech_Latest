import React from "react";
import styles from "./FeatureHighlights.module.css";

const defaultItems = [
  {
    kicker: "99.9%",
    heading: "Uptime You Can Count On",
    text:
      "Ensure uninterrupted business continuity with our 99.9% uptime SLA guarantee.",
  },
  {
    kicker: "Unlimited",
    heading: "Agents at One Fixed Price",
    text:
      "Choose unlimited agents pricing over per-seat fees. Perfect for scaling fast without budget surprises.",
  },
  {
    kicker: "24/7",
    heading: "Global Phone Support, Always On",
    text:
      "Get expert assistance any time of day, across all time zones—because your operations never sleep.",
  },
];

export default function FeatureHighlights({ items = defaultItems }) {
  return (
    <section className={styles.wrap} aria-label="Key highlights">
      <div className={styles.grid}>
        {items.map((item, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.kicker}>{item.kicker}</div>
            <h3 className={styles.heading}>{item.heading}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
