import React from "react";
import styles from "./Suites.module.css";

/** Tiny inline icon (replace with your own or <img/> if you like) */
const DotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="8" fill="#ff6a00" />
  </svg>
);

function Tag({ children, icon = <DotIcon /> }) {
  return (
    <span className={styles.tag}>
      <span className={styles.tagIcon}>{icon}</span>
      {children}
    </span>
  );
}

export default function Suites({
  items = [
    {
      title: "Enterprise One Suite",
      eyebrow: "For Business Ops Teams",
      desc:
        "Unite your entire workforce with a single, intuitive platform for all internal service requests. This solution streamlines cross-departmental operations, boosting employee productivity, and fostering a culture of seamless collaboration and excellence.",
      tags: ["Help Desk", "Assist AI", "Business Intelligence", "HappyFox AI"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      align: "left",
    },
    {
      title: "Enterprise ITSM Suite",
      eyebrow: "For IT Support Teams",
      desc:
        "Revolutionize your IT service delivery from a cost center to a strategic enabler. This solution ensures unparalleled uptime, accelerates problem resolution, and drives continuous IT improvement, empowering your business to innovate and grow without interruption.",
      tags: ["Service Desk", "HappyFox AI", "Assist AI", "Workflows"],
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
      align: "right",
    },
  ],
}) {
  return (
    <section className={styles.section} aria-label="Solution Suites">
      <div className={styles.container}>
        {items.map((card, i) => {
          const flip = card.align === "right";
          return (
            <article key={i} className={styles.card}>
              <div className={`${styles.row} ${flip ? styles.flip : ""}`}>
                <figure className={styles.media}>
                  <img src={card.image} alt="" className={styles.image} />
                  {/* Optional overlay badges (stub) */}
                  {/* <div className={styles.badgeBox}>
                    <span className={styles.badge}>ROI</span>
                    <span className={styles.badgeMuted}>$9496</span>
                  </div> */}
                </figure>

                <div className={styles.content}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.eyebrow}>{card.eyebrow}</p>
                  <p className={styles.desc}>{card.desc}</p>

                  <div className={styles.tags}>
                    {card.tags.map((t, idx) => (
                      <Tag key={idx}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
