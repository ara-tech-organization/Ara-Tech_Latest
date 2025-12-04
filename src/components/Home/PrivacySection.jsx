import React from "react";
import { useState } from "react";
import styles from "./PrivacySection.module.css";

export default function PrivacySection() {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section
      data-aos="fade-up"
      className={styles.section}
      aria-labelledby="privacy-heading"
    >
      {/* subtle decorative background pattern */}
      <div className={styles.bgPattern} aria-hidden />

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 id="privacy-heading" className={styles.title}>
            Respecting Your Privacy,
            <br />
            <span className={styles.titleAccent}>Securing Your Trust</span>
          </h1>
        </header>

        <div className={styles.cardWrap}>
          {/* Left: content block (glass panel) */}
          <div className={styles.leftPanel}>
            <div className={styles.accentBar} aria-hidden />
            <h3 className={styles.leftKicker}>
              <span className={styles.promise}>We Promise</span>
            </h3>

            <p className={styles.copy}>
              Your privacy is our top priority. We’re committed to safeguarding
              your personal information with the highest standards of security.
              By respecting your privacy, we foster a relationship built on
              trust and reliability, ensuring you can feel confident every time.
            </p>
          </div>

          {/* Right: media card with play + floating shapes */}
          <div
            className={styles.rightPanel}
            role="region"
            aria-label="Privacy overview"
            onClick={() => setOpenVideo(true)} // <--- OPEN MODAL
            style={{ cursor: "pointer" }}
          >
            <div className={styles.mediaCard}>
              <div className={styles.mediaInner}>
                <div className={styles.playWrap}>
                  <img
                    src="./thumbnail.jpg"
                    alt="Video preview"
                    className={styles.thumbImg}
                  />

                  <button className={styles.playButton} aria-label="Play overview video">
    <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(15,23,36,0.08)" strokeWidth="2" />
      <path d="M26 20v24l22-12-22-12z" fill="white" />
    </svg>
  </button>

                  <div className={styles.pulse} aria-hidden />
                </div>
                <div className={styles.mediaMeta}>
                  {" "}
                  <strong className={styles.mediaTitle}>
                    Privacy & Security — 2:14
                  </strong>{" "}
                  <span className={styles.mediaDesc}>click to play</span>{" "}
                </div>{" "}
              </div>{" "}
              {/* floating decorative shapes */}{" "}
              <svg
                className={styles.floatShapeA}
                viewBox="0 0 200 200"
                aria-hidden
              >
                {" "}
                <defs>
                  {" "}
                  <linearGradient id="gA" x1="0" x2="1">
                    {" "}
                    <stop
                      offset="0"
                      stopColor="#7c3aed"
                      stopOpacity="0.18"
                    />{" "}
                    <stop offset="1" stopColor="#f97316" stopOpacity="0.12" />{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <circle cx="40" cy="40" r="60" fill="url(#gA)"></circle>{" "}
              </svg>{" "}
              <svg
                className={styles.floatShapeB}
                viewBox="0 0 120 120"
                aria-hidden
              >
                {" "}
                <defs>
                  {" "}
                  <linearGradient id="gB" x1="0" x2="1">
                    {" "}
                    <stop
                      offset="0"
                      stopColor="#06b6d4"
                      stopOpacity="0.12"
                    />{" "}
                    <stop offset="1" stopColor="#60a5fa" stopOpacity="0.08" />{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <rect
                  x="0"
                  y="0"
                  rx="18"
                  width="120"
                  height="120"
                  fill="url(#gB)"
                ></rect>{" "}
              </svg>{" "}
            </div>
          </div>

          {/* -- VIDEO MODAL -- */}
          {openVideo && (
            <div className={styles.overlay} onClick={() => setOpenVideo(false)}>
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.closeBtn}
                  onClick={() => setOpenVideo(false)}
                >
                  ✕
                </button>

                <video controls autoPlay className={styles.video}>
                  <source src="./TechPrivacy.mp4" type="video/mp4" />
                  Your browser doesn't support video playback.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
