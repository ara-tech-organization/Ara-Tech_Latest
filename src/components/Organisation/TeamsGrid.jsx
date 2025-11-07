import React from "react";
import styles from "./TeamsGrid.module.css";

const defaultItems = [
  {
    title: "Customer Support",
    desc:
      "Deliver consistent, high-quality customer service with centralized ticket management.",
    href: "#",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "IT Support",
    desc:
      "Manage tickets, assets, and IT tasks seamlessly in one unified platform.",
    href: "#",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HR Support",
    desc:
      "Manage employee queries, onboarding, offboarding, and more.",
    href: "#",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Operations & Facilities",
    desc:
      "Handle maintenance, logistics, and facility requests with full visibility and accountability.",
    href: "#",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TeamsGrid({
  heading = "One Team or Every Team",
  subheading = "HappyFox grows with you—from supporting a single team to powering your entire enterprise across customer service, IT, HR, and operations.",
  items = defaultItems,
}) {
  return (
    <section className={styles.section} aria-labelledby="teams-heading">
      <div className={styles.header}>
        <h2 id="teams-heading" className={styles.title}>{heading}</h2>
        <p className={styles.subtitle}>{subheading}</p>
      </div>

      <div className={styles.grid}>
        {items.map((it, i) => (
          <article className={styles.card} key={i}>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardDesc}>{it.desc}</p>

              <a className={styles.learn} href={it.href}>
                Learn More
                <svg
                  className={styles.chev}
                  width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <figure className={styles.media}>
              <img src={it.img} alt="" className={styles.img} loading="lazy" />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
