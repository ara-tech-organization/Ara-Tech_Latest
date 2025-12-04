import React, { useState, useEffect, useRef } from "react";
import styles from "./TestimonialShowcase.module.css";

/**
 * TestimonialShowcase
 * - Uses the same `items` shape you provided.
 * - Left side: brand/illustration panel.
 * - Right side: animated, accessible card stack with controls.
 */
export default function TestimonialShowcase({
  items = [
    /* default items omitted for brevity — use your existing `items` array */
  ],
  autoplay = false,
  autoplayDelay = 6000,
}) {
  // You passed items inline earlier; keep them if not provided.
  const defaultItems = [
    {
      org: {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80",
      },
      quote:
        "React is the foundation of our front-end development — a powerful JavaScript library that enables us to build fast, scalable, and interactive UIs. With reusable components and a virtual DOM, it helps us create seamless user experiences while ensuring high performance across all platforms.",
      author: "Front-End Framework",
      role: "Used for building responsive and interactive web apps.",
    },
    {
      org: {
        name: "MySQL",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        image:
          "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80",
      },
      quote:
        "MySQL is our trusted open-source relational database system, known for its stability, scalability, and speed. We use it to handle complex data-driven applications, ensuring secure data storage, easy retrieval, and optimized performance under heavy loads.",
      author: "Database Management",
      role: "Ensures efficient data storage and quick access for all applications.",
    },
    {
      org: {
        name: "Firebase",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
      quote:
        "Firebase serves as the backbone of our real-time, cloud-based applications. From seamless data synchronization and hosting to push notifications and authentication, it enables us to deliver dynamic user experiences while minimizing backend complexity.",
      author: "Cloud Platform",
      role: "Used for app hosting, real-time sync, and user authentication.",
    },
    {
      org: {
        name: "Flutter",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      },
      quote:
        "Flutter empowers us to build visually stunning and high-performance applications for mobile, web, and desktop — all from a single codebase. With its expressive UI components and hot-reload feature, we deliver faster development cycles without compromising on design or quality.",
      author: "Cross-Platform Development",
      role: "Empowers multi-platform app creation with a single codebase.",
    },
    {
      org: {
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      },
      quote:
        "Figma is our go-to tool for UI/UX design, enabling collaborative prototyping and real-time feedback. Its cloud-based platform allows designers and developers to work together effortlessly, ensuring every project maintains design consistency and clarity from concept to delivery.",
      author: "Design & Prototyping",
      role: "Used for creating modern, user-friendly design systems and prototypes.",
    },
  ];

  const data = items && items.length ? items : defaultItems;
  const [index, setIndex] = useState(0);
  const length = data.length;
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const go = (i) => setIndex(((i % length) + length) % length);

  useEffect(() => {
    if (!autoplay) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, autoplayDelay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplayDelay, length]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [length]);

  // extract current item
  const { org, quote, author, role } = data[index];

  return (
    <section data-aos="fade-up"
 className={styles.section} aria-label="Technology showcase">
      <div className={styles.shell}>
        {/* LEFT: Brand / Illustration panel */}
        <aside className={styles.leftPanel} aria-hidden>
          <div className={styles.brandBackdrop}>
            {/* subtle geometric background shapes */}
            <svg
              className={styles.bgShape}
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#FFEDD5" />
                  <stop offset="1" stopColor="#FFECD9" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0" stopColor="#EAF8F2" />
                  <stop offset="1" stopColor="#E6F0FF" />
                </linearGradient>
              </defs>

              {/* <!-- circle in top-left (moved nearer the corner) --> */}
              <circle cx="100" cy="100" r="120" fill="url(#g1)" opacity="0.95" />

              {/* <!-- rounded rectangle in bottom-right (positioned inside the 600x600 canvas) --> */}
              <rect x="340" y="370" width="230" height="230" rx="36" fill="url(#g2)" opacity="0.95" />
            </svg>

          </div>

          <div className={styles.brandContent}>
            <h3 className={styles.brandTitle}>Tech we trust</h3>
            <p className={styles.brandLead}>
              A curated stack of tools and platforms we use across projects — stable, scalable, and trusted.
            </p>

            <div className={styles.logoGrid} aria-hidden>
              {data.map((d, i) => (
                <div key={i} className={`${styles.logoItem} ${i === index ? styles.logoActive : ""}`}>
                  <img src={d.org.logo} alt={d.org.name} loading="lazy" />
                </div>
              ))}
            </div>

            {/* <button
              className={styles.cta}
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore our stack
            </button> */}
          </div>
        </aside>

        {/* RIGHT: Cards area */}
        <main className={styles.rightPanel}>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Previous technology"
              onClick={prev}
            >
              ‹
            </button>

            <div className={styles.dots} role="tablist" aria-label="Technology list">
              {data.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Show ${data[i].org.name}`}
                  aria-selected={i === index}
                  role="tab"
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Next technology"
              onClick={next}
            >
              ›
            </button>
          </div>

          <div className={styles.carousel} aria-live="polite">
            {data.map((item, i) => {
              const active = i === index;
              return (
                <article
                  key={i}
                  className={`${styles.quoteCard} ${active ? styles.active : styles.inactive}`}
                  aria-hidden={!active}
                >
                  <header className={styles.cardHead}>
                    <div className={styles.token}>
                      <span className={styles.tokenNum}>{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    <div className={styles.cardOrg}>
                      <img src={item.org.logo} alt={`${item.org.name} logo`} className={styles.smallLogo} />
                      <div>
                        <div className={styles.orgName}>{item.org.name}</div>
                        <div className={styles.orgRole}>{item.author}</div>
                      </div>
                    </div>
                  </header>

                  <blockquote className={styles.quoteText}>
                    “{item.quote}”
                  </blockquote>

                  <footer className={styles.cardFooter}>
                    <div className={styles.person}>
                      <div className={styles.personName}>{item.author}</div>
                      <div className={styles.personRole}>{item.role}</div>
                    </div>

                    <div className={styles.cardMedia}>
                      <img src={item.org.image} alt={`${item.org.name} visual`} loading="lazy" />
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>

          {/* bottom controls for accessibility */}
          <div className={styles.bottomRow}>
            <button className={styles.viewAll} type="button">View all integrations</button>
            <div className={styles.navBtns}>
              <button className={styles.smallBtn} onClick={prev} aria-label="Previous">Prev</button>
              <button className={styles.smallBtn} onClick={next} aria-label="Next">Next</button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
