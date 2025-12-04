import React from "react";
import styles from "./DemoRequest.module.css";

export default function ContactUs() {
  return (
    <section className={styles.wrap}>
      {/* Left Section */}
      <div className={styles.left}>
        {/* Centered image */}
        <div className={styles.avatarWrap}>
          <img src="https://images.pexels.com/photos/7433879/pexels-photo-7433879.jpeg" alt="Product Expert" />
        </div>

        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Get in Touch <br /> with Ara Technologies
          </h1>

          <ul className={styles.checklist}>
            <li>Let’s discuss how we can turn your vision into reality</li>
            <li>Share your ideas, projects, or challenges — we’ll guide you</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Contact Us 📩</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Work Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea
              placeholder="Your Message"
              rows="4"
              className={styles.textarea}
              required
            ></textarea>

            <button className={styles.cta}>
              Send Message <span className={styles.arrow}>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
