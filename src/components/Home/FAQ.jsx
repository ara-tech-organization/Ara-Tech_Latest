import React, { useState, useRef, useEffect } from "react";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    q: "What services does Ara Discover Technologies offer?",
    a: "We provide a wide range of services including UI/UX Design, Web & Mobile App Development, Graphic Design, Branding, and Digital Marketing. We also offer tailored software products for education, healthcare, and business management.",
  },
  {
    q: "Where is Ara Discover Technologies located?",
    a: "We are headquartered in [City], with remote teams and partners worldwide. Contact us for precise office info.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we frequently work with clients across the US, Europe, Middle East and Asia.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We specialize in Healthcare, Education, FinTech, Real Estate / PropTech, Manufacturing, Energy & Utilities and LegalTech.",
  },
  {
    q: "Do you provide both web and mobile app development?",
    a: "Yes — full-stack web and native/hybrid mobile experiences.",
  },
  {
    q: "Can I hire you for just design or development only?",
    a: "Absolutely. We offer focused engagement for design-only, development-only, or end-to-end product delivery.",
  },
  {
    q: "What is your design process like?",
    a: "We follow a collaborative process: discovery → prototyping → user testing → visual design → handoff & development support.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary — a typical MVP is 8–16 weeks depending on scope; enterprise projects may last longer.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. We provide SLA-backed maintenance, monitoring, and feature roadmaps.",
  },
  {
    q: "How do I get started with Ara Discover Technologies?",
    a: "Start by contacting us with your goals — we'll schedule a discovery call and provide an estimated scope and timeline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(FAQ_ITEMS);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(FAQ_ITEMS);
      return;
    }
    setFiltered(
      FAQ_ITEMS.filter(
        (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      )
    );
    setOpenIndex(-1); // collapse when searching
  }, [query]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  // keyboard support for list navigation
  const listRef = useRef(null);
  const onKeyDown = (e) => {
    const focusable = Array.from(
      listRef.current.querySelectorAll("button[data-idx]")
    );
    const idx = focusable.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = focusable[(idx + 1) % focusable.length];
      next && next.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = focusable[(idx - 1 + focusable.length) % focusable.length];
      prev && prev.focus();
    }
  };

  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Quick answers about how we work, pricing, and onboarding — still not
            sure? Reach out and we'll help.
          </p>
        </header>

        <div className={styles.controls}>
          <label htmlFor="faq-search" className={styles.srOnly}>
            Search FAQ
          </label>
          <input
            id="faq-search"
            className={styles.search}
            placeholder="Search questions (e.g. 'design', 'support', 'contact')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search frequently asked questions"
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.leftPanel}>
            <div className={styles.hi}>Need help?</div>
            <h3 className={styles.leftTitle}>
              We’re here to make things simple
            </h3>
            <p className={styles.leftText}>
              If you don’t find what you need here, contact our team and we’ll
              get back within one business day.
            </p>

            <a href="/contact" className={styles.contactBtn}>
              Contact Support
            </a>
          </div>

          <div className={styles.rightPanel} onKeyDown={onKeyDown}>
            <div
              ref={listRef}
              className={styles.accordion}
              role="list"
              aria-label="FAQ list"
              data-faq-accordion
            >
              {filtered.length === 0 && (
                <div className={styles.empty}>
                  No results found for “{query}”
                </div>
              )}

              {filtered.map((item, i) => {
                const idx = FAQ_ITEMS.indexOf(item); // original index for stable keys
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={styles.item}>
                    <button
                      className={`${styles.q} ${isOpen ? styles.open : ""}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => toggle(idx)}
                      data-idx
                      onKeyDown={(e) => {
                        // support Enter/Space
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggle(idx);
                        }
                      }}
                    >
                      <span className={styles.qIcon} aria-hidden>
                        {/* chevron icon */}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span className={styles.qText}>{item.q}</span>
                      <span className={styles.qTag}>
                        {/* small tag can be used for categories */}
                      </span>
                    </button>

                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      className={styles.a}
                      style={{
                        // animate height via maxHeight
                        maxHeight: isOpen ? `${2000}px` : "0px",
                      }}
                    >
                      <div className={styles.aInner}>{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
