import { useState } from "react";
import styles from "./TestimonialShowcase.module.css";

const items = [
  {
    org: {
      name: "Dartmouth University",
      logo: "https://dummyimage.com/140x80/004225/ffffff.png&text=Dartmouth",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    },
    quote:
      "Transitioning to HappyFox was transformative, streamlining our workflow and expediting response times for facilities-related repairs. With top-notch customer service, we enthusiastically recommend HappyFox for asset and service management optimization.",
    author: "Justin Gere",
    role: "Manager, IT Operations, Dartmouth University",
  },
  {
    org: {
      name: "Harvard University",
      logo: "https://dummyimage.com/140x80/8b0000/ffffff.png&text=Harvard",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    },
    quote:
      "HappyFox helped us modernize ticketing and drastically cut response times. Their intuitive interface and reliable support make IT management effortless.",
    author: "Sarah Miller",
    role: "IT Head, Harvard University",
  },
];

export default function TestimonialShowcase() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const { org, quote, author, role } = items[index];

  return (
    <section className={styles.section} aria-label="Customer stories">
      <div className={styles.toolbar}>
        <button className={styles.viewAll} type="button">
          View All
        </button>
        <div className={styles.nav}>
          <button
            className={styles.navBtn}
            aria-label="Previous"
            onClick={prev}
            type="button"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            aria-label="Next"
            onClick={next}
            type="button"
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Left column */}
        <div className={styles.leftCol}>
          <article className={`${styles.card} ${styles.logoCard}`}>
            <img
              src={org.logo}
              alt={`${org.name} logo`}
              className={styles.logo}
            />
            <p className={styles.logoName}>{org.name}</p>
          </article>

          <article className={`${styles.card} ${styles.mediaCard}`}>
            <img
              src={org.image}
              alt={`${org.name} campus`}
              className={styles.mediaImg}
            />
          </article>
        </div>

        {/* Right column */}
        <article className={`${styles.card} ${styles.quoteCard}`}>
          <p className={styles.quote}>{quote}</p>
          <div className={styles.meta}>
            <p className={styles.author}>{author}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
