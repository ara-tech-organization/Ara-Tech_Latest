import React from "react";
import styles from "./FeatureHighlights.module.css";
import {
  Lightbulb,
  Palette,
  Code,
  Server,
} from "lucide-react"; // using Lucide icons (clean + modern)

/**
 * FeatureHighlights
 * Neat, professional, color-balanced cards like Zoho product pages.
 */
const defaultItems = [
  {
    icon: <Lightbulb />,
    color: "#FFB74D",
    kicker: "Discovery & Consultation",
    heading: "Understand your goals & systems",
    text: "Through discovery and requirement sessions, we align technical capabilities with business outcomes to set a solid project foundation.",
  },
  {
    icon: <Palette />,
    color: "#4DB6AC",
    kicker: "UI/UX & Architecture",
    heading: "Design experiences that work beautifully",
    text: "Our designers and architects craft usable, scalable, and elegant solutions that blend creativity with technical precision.",
  },
  {
    icon: <Code />,
    color: "#64B5F6",
    kicker: "Development & Testing",
    heading: "Build, test & iterate with confidence",
    text: "We develop secure, high-performance applications with agile cycles and continuous testing for predictable delivery.",
  },
  {
    icon: <Server />,
    color: "#9575CD",
    kicker: "Deployment & Support",
    heading: "Deploy seamlessly & scale effortlessly",
    text: "We ensure a smooth go-live, monitor uptime, and provide proactive maintenance for long-term success.",
  },
];

export default function FeatureHighlights({ items = defaultItems }) {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="features-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="features-title" className={styles.title}>
            Our Proven Delivery Framework
          </h2>
          <p className={styles.subtitle}>
            From consultation to ongoing support, our structured process ensures clarity, speed, and measurable results.
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <article key={idx} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.icon}
              </div>

              <div className={styles.body}>
                <div className={styles.kicker}>{item.kicker}</div>
                <h3 className={styles.heading}>{item.heading}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
