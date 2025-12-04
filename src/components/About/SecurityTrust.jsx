import React from "react";
import styles from "./SecurityTrust.module.css";

/**
 * SecurityTrust
 * Clean, modern, and responsive redesign of your "Security & Trust" section.
 * Replace the inline SVG with your illustration if you have one.
 */

export default function SecurityTrust() {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="security-title">
      <div className={styles.backdrop} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h2 id="security-title" className={styles.title}>
              Security &amp; Trust
            </h2>
            <p className={styles.lead}>
              We prioritize data protection, system integrity, and compliance
              across all our services. From GDPR to ISO standards, Ara
              Technologies follows strict security protocols to ensure our
              clients’ peace of mind.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <strong>Enterprise-grade</strong>
                <span>End-to-end encryption & hardened infra</span>
              </div>
              <div className={styles.feature}>
                <strong>Compliance</strong>
                <span>GDPR, ISO-ready policies & audits</span>
              </div>
              <div className={styles.feature}>
                <strong>Monitoring</strong>
                <span>24/7 observability & rapid incident response</span>
              </div>
            </div>

            {/* <div className={styles.actions}>
              <a href="#" className={styles.primary}>
                View security whitepaper
              </a>
              <a href="#" className={styles.ghost}>
                Request audit
              </a>
            </div> */}
          </div>
        </div>

        <div className={styles.right}>
          <div
            className={styles.illustration}
            role="img"
            aria-label="shield and network illustration"
          >
            {/* Blurry background blobs */}
            <div className={styles.blobA} aria-hidden />
            <div className={styles.blobB} aria-hidden />

            {/* Shield image */}
            <div className={styles.svgWrap} aria-hidden>
              <img
                src="./shield-security.png"
                alt="Security Shield"
                className={styles.shieldImg}
                loading="lazy"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
