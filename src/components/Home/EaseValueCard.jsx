import React, { useEffect, useRef, useState } from "react";
import styles from "./EaseValueCard.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contents = [
  {
    title: "Ensure cohesion",
    text: "Creating a unified, seamless experience where every element works together effortlessly for maximum efficiency and impact.",
    img: "./cohesion.png",
  },
  {
    title: "Maintain authority",
    text: "Maintain authority by projecting confidence, setting clear expectations, and leading with consistency — ensuring every decision reinforces trust, respect, and control across every touchpoint.",
    img: "./authority.png",
  },
  {
    title: "Deliver rapid outcomes",
    text: "Deliver rapid outcomes by streamlining processes, eliminating delays, and executing with precision — ensuring swift, impactful results that drive progress and exceed expectations.",
    img: "./delivery.png",
  },
];

const AUTOPLAY_MS = 6000;

const EaseValueCard = () => {
  const [index, setIndex] = useState(0);
  const count = contents.length;
  const autoplayRef = useRef(null);

  const goTo = (i) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!AUTOPLAY_MS) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [index]);

  const startX = useRef(null);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    startX.current = null;
  };

  return (
    <div data-aos="fade-up" className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Designed for ease, built for value</h1>
        <p className={styles.subtext}>
          Fast results. Smart investments. Transparent from start to finish. ARA
          Discover Technologies empowers your business with powerful
          solutions made simple.
        </p>

        <div
          className={styles.carousel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {contents.map((item, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.left}>
                    <h2 className={styles.percentage}>97%</h2>
                    <div className={styles.textBlock}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>

                    </div>
                  </div>

                  <div className={styles.right}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.slideImg}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={styles.prevBtn}
          onClick={prev}
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          className={styles.nextBtn}
          onClick={next}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className={styles.pagination}>
          {contents.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EaseValueCard;
