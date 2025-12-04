import React from "react";
import styles from "./Suites.module.css";
import illustration from "../../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";

const Icon = ({ type }) => {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" };
  if (type === "code")
    return (
      <svg {...common} aria-hidden>
        <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  if (type === "design")
    return (
      <svg {...common} aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  if (type === "cloud")
    return (
      <svg {...common} aria-hidden>
        <path d="M8 9a4 4 0 0 0-4 8h12a5 5 0 0 0 0-10 6 6 0 0 0-12 2Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  return (
    <svg {...common} aria-hidden>
      <path d="M12 3l8 4v5c0 5-4 9-8 11-4-2-8-6-8-11V7l8-4Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
};

export default function Suites({
  title = "Solutions crafted for outcomes",
  subtitle = "Product-minded engineering, design systems, and infrastructure — built to scale and delight.",
  items = [
    {
      title: "Custom Software",
      desc: "Architecture, APIs and product engineering aligned to your KPIs.",
      icon: "code",
      accent: "#E8F1FF",
    },
    {
      title: "Design Systems",
      desc: "Reusable components, accessibility and design ops for faster delivery.",
      icon: "design",
      accent: "#E8F8F5",
    },
    {
      title: "Cloud & DevOps",
      desc: "Automation, security posture and resilient infrastructure.",
      icon: "cloud",
      accent: "#FFF3E0",
    },
    {
      title: "Security & Compliance",
      desc: "Security by design with governance and continuous assurance.",
      icon: "security",
      accent: "#F6EAF9",
    },
  ],
}) {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-label="Solutions & suites">
      <div className={styles.shell}>
        {/* LEFT: full-bleed illustration (keeps aspect, full height of shell) */}
        <div className={styles.left}>
          <img src={illustration} alt="Abstract objects illustration" className={styles.heroImg} />
          <div className={styles.leftOverlay} />
        </div>

        {/* RIGHT: vertical rail with varied cards */}
        <div className={styles.right}>
          <header className={styles.head}>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.lead}>{subtitle}</p>
          </header>

          <div className={styles.rail} role="list">
            {items.map((it, idx) => (
              <article
                key={idx}
                role="listitem"
                className={`${styles.card} ${styles["cardVariant" + ((idx % 3) + 1)]}`}
                style={{ borderLeftColor: it.accent }}
                tabIndex={0}
                aria-label={it.title}
              >
                <div className={styles.cardLeft}>
                  <div className={styles.token} style={{ background: it.accent }}>
                    <span className={styles.tokenNum}>{idx + 1}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHead}>
                    <div className={styles.iconWrap}>
                      <Icon type={it.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>{it.title}</h3>
                  </div>

                  <p className={styles.cardDesc}>{it.desc}</p>

                  {/* <div className={styles.cardFoot}>
                    <a className={styles.learn} href="#learn">
                      Learn more →
                    </a>
                    <button className={styles.contact} type="button">
                      Talk to expert
                    </button>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
