import React from "react";
import styles from "./Hero.module.css";

const Hero = ({
  title = "Our Structure. Our People. Our Vision.",
  subtitle = `ARA Discover Technologies, a division of ARA Discoveries Pvt Ltd, drives digital transformation with a passionate team of strategists, engineers, and project managers focused on delivering smart, scalable solutions.`,
  ctaText = "Get a Demo",
  ctaHref = "#",
  // secondaryText = "Explore offerings",
  secondaryHref = "#about",
}) => {
  return (
    <section data-aos="fade-up"
 className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.badge} aria-hidden>
            <span className={styles.dot} /> Trusted · Scalable · Secure
          </div>

          <h1 id="hero-title" className={styles.title}>
            {title}
          </h1>

          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.ctaRow}>
            <a
              href={ctaHref}
              className={styles.ctaPrimary}
              role="button"
              aria-label={ctaText}
            >
              {ctaText}
            </a>

            {/* <a
              href={secondaryHref}
              className={styles.ctaGhost}
              aria-label={secondaryText}
            >
              {secondaryText}
            </a> */}
          </div>

          {/* <ul className={styles.trustList} aria-hidden>
            <li>Enterprise</li>
            <li>Healthcare</li>
            <li>Mobility</li>
            <li>Fintech</li>
          </ul> */}
        </div>

        <div className={styles.visual} aria-hidden>
          {/* Abstract, vector-based illustration — scales perfectly without photos */}
          <svg viewBox="0 0 800 520" className={styles.graphic} role="img" focusable="false" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#ffd8b2" />
                <stop offset="1" stopColor="#ffb37a" />
              </linearGradient>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="#bce7ff" />
                <stop offset="1" stopColor="#8fcfff" />
              </linearGradient>
              <linearGradient id="g3" x1="0" x2="1">
                <stop offset="0" stopColor="#d6f9e8" />
                <stop offset="1" stopColor="#9feecb" />
              </linearGradient>
            </defs>

            <rect x="40" y="40" width="320" height="200" rx="14" fill="url(#g1)" opacity="0.95" />
            <rect x="220" y="160" width="380" height="260" rx="18" fill="url(#g2)" opacity="0.92" />
            <rect x="60" y="260" width="180" height="120" rx="12" fill="url(#g3)" opacity="0.96" />

            {/* small accent circles and lines */}
            <circle cx="480" cy="80" r="14" fill="#ff6a00" opacity="0.95" />
            <circle cx="560" cy="360" r="8" fill="#2f7cff" opacity="0.9" />
            <g opacity="0.18" fill="#0e1626">
              <rect x="320" y="60" width="120" height="8" rx="4" />
              <rect x="320" y="80" width="88" height="8" rx="4" />
            </g>

            {/* tiny "cards" inside big rect to feel product-like */}
            <g fill="#ffffff" opacity="0.9">
              <rect x="80" y="80" width="220" height="22" rx="6" />
              <rect x="80" y="112" width="160" height="14" rx="6" />
              <rect x="260" y="186" width="84" height="20" rx="8" />
              <rect x="292" y="216" width="112" height="14" rx="6" />
              <rect x="240" y="320" width="120" height="18" rx="8" />
            </g>
          </svg>

          <div className={styles.sideCard}>
            <div className={styles.sideCardTitle}>Platform uptime</div>
            <div className={styles.sideCardValue}>99.98%</div>
            <div className={styles.sideCardNote}>SLA monitored • realtime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
