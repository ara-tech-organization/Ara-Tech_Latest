import React from "react";
import styles from "./GratitudeSection.module.css";
import SignatureSVG from "../../assets/ara-signature.svg"; // <-- Add your SVG file here

export default function GratitudeSection() {
  return (
    <section className={styles.wrap}>

      <div className={styles.inner}>
        
        <h2 className={styles.heading}>With Gratitude and Love</h2>

        <p className={styles.subText}>
          We are deeply grateful to every client who trusted us to bring their ideas to life.
          Your belief fuels our passion, sharpens our engineering, and inspires us to create
          products that spark progress.
        </p>

        {/* Glowing background wrapper */}
        <div className={styles.glowWrapper}>
          <div className={styles.glow}></div>

          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              “Innovation begins with a shared vision.  
              To every client who walks in with courage and curiosity —  
              we welcome you with open minds and open possibilities.”
            </p>

            {/* Signature SVG */}
            <img
              src={SignatureSVG}
              alt="ARA Discoveries Signature"
              className={styles.signature}
            />
          </div>
        </div>

        <p className={styles.finalLine}>
          Here’s to building what’s next — together.
        </p>

        {/* CTA BUTTON */}
        <a href="/Ara-Tech/contact" className={styles.ctaButton}>
          Work With Us
        </a>
      </div>

    </section>
  );
}
