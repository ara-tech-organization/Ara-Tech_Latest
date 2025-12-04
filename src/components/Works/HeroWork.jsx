// WorksHeroAlt.jsx
import React from "react";
import styles from "./HeroWork.module.css";
import heroimg from "../../assets/herowork.jpg"

/**
 * WorksHeroAlt — alternative hero with prominent image and responsive layout
 * Props:
 * - title, subtitle, ctaText, ctaHref, image (URL), imageAlt
 */
export default function WorksHeroAlt({
  title = "We build beautiful & reliable products",
  subtitle = "Design-led engineering for SaaS and digital platforms.",
  ctaText = "Explore Our Works",
  ctaHref = "#works",
  image = heroimg,
  imageAlt = "Team collaborating on product",
}) {
  return (
    <section className={styles.hero} aria-label="Our works">
      <div className={styles.inner}>
        <div className={styles.media} style={image ? { ['--img']: `url('${image}')` } : {}}>
          {/* image is background + decorative overlay */}
          <img className={styles.hiddenImg} src={image || undefined} alt={imageAlt} />
          <div className={styles.badge}>Featured Project</div>
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>Our Works</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={ctaHref}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(ctaHref);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {ctaText}
            </a>
            {/* <a className={styles.ghost} href="#contact">Get in touch</a> */}
          </div>

          <ul className={styles.stats}>
            <li><strong>50+</strong><span>Designs</span></li>
            <li><strong>80%</strong><span>Repeat clients</span></li>
            <li><strong>9.8</strong><span>Avg. rating</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

