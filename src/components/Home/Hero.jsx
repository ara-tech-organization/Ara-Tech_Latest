import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCloud,
  faRobot,
  faServer,
  faCode,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Always start from beginning on load/refresh
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, []);

  const videoSrc = import.meta.env.BASE_URL + "birdara.mp4"; // public/bird.webm

  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Innovate. Build. Scale.</span>
        </h1>

        <p className={styles.subtitle}>
          Welcome to ARA Discover Technologies — where your digital vision takes
          form.
        </p>

        <div className={styles.buttons}>
          <Link to="/Ara-tech/contact" className={styles.primaryBtn}>
            Contact us
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        {/* <div className={styles.iconArc}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.arcIcon} />
          <FontAwesomeIcon icon={faCode} className={styles.arcIcon} />
          <FontAwesomeIcon icon={faCloud} className={styles.arcIcon} />
          <FontAwesomeIcon icon={faRobot} className={styles.arcIcon} />
          <FontAwesomeIcon icon={faServer} className={styles.arcIcon} />
          <FontAwesomeIcon icon={faLaptop} className={styles.arcIcon} />
        </div> */}

        {/* Transparent video: plays once, last frame stays visible */}
        <video
          ref={videoRef}
          src={videoSrc}
          className={styles.heroVideo}
          muted
          autoPlay
          playsInline
          preload="auto"
          // no loop: plays once and freezes on the last frame
        />
      </div>
    </section>
  );
};

export default Hero;
