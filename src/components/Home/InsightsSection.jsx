import React from "react";
import styles from "./InsightsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faCubes,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

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
    <section data-aos="fade-up" className={styles.section}>
      <div className={styles.container}>
        {/* From hero */}
        <h2 className={styles.title}>Get the insights you need</h2>

        <div className={styles.grid}>
          {/* Left card — “Design. Code. Conquer” section */}
          <article className={`${styles.card} ${styles.purple}`}>
            {/* <span className={styles.badge}>Key Offering</span> */}
            <h3 className={styles.cardTitle}>Design. Code. Conquer</h3>
            <p className={styles.cardDesc}>
              From idea to market-ready solution. We design delightful
              experiences, build scalable web & mobile apps, and ship with
              secure, cloud-ready architectures that grow with your business.
            </p>
            {/* <a href="#" className={styles.link}>
              See how we build <Arrow />
            </a> */}

            <div className={styles.thumb}>
              <img
                src="./resource-card-1.png"
                alt="Design. Code. Conquer dashboard"
                loading="lazy"
              />
            </div>
          </article>

          {/* Middle card — “Watch How It Works” / HappyFox webinar */}
          <article className={`${styles.card} ${styles.sun}`}>
            {/* <span className={styles.badge}>Watch How It Works</span> */}
            <h3 className={styles.cardTitle}>
              Shaping the Future, Empowering Global Success
            </h3>
            <p className={styles.cardDesc}>
              From startups to enterprises, our solutions have transformed
              businesses across industries. We combine creativity with
              cutting-edge technology to create digital products that make an
              impact—anytime, anywhere.
            </p>
            {/* <a href="#" className={styles.link}>
              Watch the webinar <Arrow />
            </a> */}

            <div className={styles.thumb}>
              <img
                src="./resource-card-2.png"
                alt="HappyFox Assist AI webinar"
                loading="lazy"
              />
            </div>
          </article>

          {/* Right column — pull “Key Offerings” + highlights */}
          <aside className={styles.sidebar}>
            <span className={`${styles.badge} ${styles.badgeGhost}`}>
              Our Key Offerings
            </span>
            <h3 className={styles.sidebarTitle}>
              Practical solutions that ship fast and scale globally
            </h3>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    Mobile & Web App Development
                  </a>
                  <p className={styles.listDesc}>
                    Modern, scalable apps for iOS, Android, and web platforms.
                  </p>
                </div>
              </li>

              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCubes} />
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    CRM &amp; ERP Solutions
                  </a>
                  <p className={styles.listDesc}>
                    Custom solutions that streamline operations and accelerate
                    decision-making.
                  </p>
                </div>
              </li>

              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    Data Security Solutions
                  </a>
                  <p className={styles.listDesc}>
                    Secure by design to protect data and ensure compliance.
                  </p>
                </div>
              </li>
              <li className={styles.listItem}>
                <div className={styles.listIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <a href="#" className={styles.listLink}>
                    Custom Software Development
                  </a>
                  <p className={styles.listDesc}>
                    Tailored applications that solve real-world business
                    challenges.
                  </p>
                </div>
              </li>
            </ul>

            {/* <a href="#" className={styles.cta}>
              Explore all offerings <Arrow />
            </a> */}
          </aside>
        </div>

        {/* Optional mini band pulled from screenshot copy */}
      </div>
    </section>
  );
}
