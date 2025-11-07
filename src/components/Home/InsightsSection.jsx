import React from "react";
import styles from "./InsightsSection.module.css";

const Arrow = () => (
  <svg
    className={styles.arrow}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
  </svg>
);

export default function InsightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get the insights you need</h2>

        <div className={styles.grid}>
          {/* Left card */}
          <article className={`${styles.card} ${styles.purple}`}>
            <span className={styles.badge}>IT Service Management</span>
            <h3 className={styles.cardTitle}>The AI-empowered CIO</h3>
            <p className={styles.cardDesc}>
              4 technology leaders reveal the strategies for making AI real,
              relevant, and uncomplicated
            </p>
            <a href="#" className={styles.link}>
              Read more <Arrow />
            </a>

            {/* Decorative thumb / replace src with real image */}
            <div className={styles.thumb}>
              <img
                src="./resource-card-1.png"
                alt="The AI-empowered CIO cover"
                loading="lazy"
              />
            </div>
          </article>

          {/* Middle card */}
          <article className={`${styles.card} ${styles.sun}`}>
            <span className={styles.badge}>Customer Service</span>
            <h3 className={styles.cardTitle}>
              2025 Customer Service Benchmark Report
            </h3>
            <p className={styles.cardDesc}>
              Compare your support metrics with benchmarks from 32,000+ teams.
              Uncover AI trends and tactics to boost your performance.
            </p>
            <a href="#" className={styles.link}>
              Read more <Arrow />
            </a>

            <div className={styles.thumb}>
              <img
                src="./resource-card-2.png"
                alt="Customer Service Benchmark 2025"
                loading="lazy"
              />
            </div>
          </article>

          {/* Right column list */}
          <aside className={styles.sidebar}>
            <span className={`${styles.badge} ${styles.badgeGhost}`}>
              Other Resources
            </span>
            <h3 className={styles.sidebarTitle}>
              Guides, stories, and playbooks to support every step of your
              journey
            </h3>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  ✦
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    Customer service, rewired <Arrow />
                  </a>

                  <p className={styles.listDesc}>
                    See how AI solves key CS challenges in Forrester’s
                    Freshworks study.
                  </p>
                </div>
              </li>

              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  ▣
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    The CIO’s ITSM playbook
                  </a>
                  <p className={styles.listDesc}>
                    Explore insights from 225 global IT decision-makers.
                  </p>
                </div>
              </li>

              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  ⚑
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    Tap into the power of people + AI
                  </a>
                  <p className={styles.listDesc}>
                    How AI is transforming workplace and IT efficiency.
                  </p>
                </div>
              </li>
            </ul>

            <a href="#" className={styles.cta}>
              Explore all resources <Arrow />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
