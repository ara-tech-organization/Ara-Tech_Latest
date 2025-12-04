import React from "react";
import styles from "./SolutionsSection.module.css";

const SolutionsSection = () => {
  return (
    <section data-aos="fade-up"
 className={styles.container}>
      <h2 className={styles.title}>
        Powerful solutions to unlock loyalty, efficiency, and growth
      </h2>

      <div className={styles.cardContainer}>
        {/* Freshservice Card */}
        <div className={styles.cardRedSoft}>
          <span className={styles.tag}>IT SERVICE MANAGEMENT</span>
          <h3 className={styles.cardTitle}>Freshservice</h3>
          <p className={styles.desc}>Uncomplicated, AI-assisted ITSM.</p>
          <button className={styles.learnBtn}>Learn more</button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2821/2821637.png"
            alt="Create Ticket"
            className={styles.image}
          />
        </div>

        {/* Freshdesk Card */}
        <div className={styles.cardNeutral}>
          <span className={styles.tag}>CUSTOMER SERVICE</span>
          <h3 className={styles.cardTitle}>Freshdesk</h3>
          <p className={styles.desc}>
            Modern, AI-assisted customer service.
          </p>
          <button className={styles.learnBtn}>Learn more</button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3481/3481035.png"
            alt="Discussion"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
