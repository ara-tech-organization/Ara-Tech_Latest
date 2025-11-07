import React from "react";
import styles from "./Hero.module.css";

const Hero = ({
  title = "The Enterprise Support Stack Teams Love",
  subtitle = `HappyFox is the most complete support stack for enterprises
blending AI, automation, and analytics in one intuitive platform.
Powerful, scalable, and built for teams who want more clarity, not complexity.`,
  ctaText = "Get a Demo",
  ctaHref = "#",
  imageSrc,
  imageAlt = "Modern office building"
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <a href={ctaHref} className={styles.cta} aria-label={ctaText}>
            {ctaText}
          </a>
        </div>

        <div className={styles.media}>
          {/* If you want the exact screenshot image, pass its URL to imageSrc */}
          <img
            src={
              imageSrc ||
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop"
            }
            alt={imageAlt}
            className={styles.image}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
