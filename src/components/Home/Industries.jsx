import React from "react";
import styles from "./Industries.module.css";

const columns = [
  [
    { key: "healthcare", title: "Healthcare", icon: "➕" },
    { key: "education", title: "Education", icon: "🧪" },
    { key: "logistics", title: "Logistics", icon: "🚚" },
  ],
  [
    { key: "realestate", title: "RealEstate & PropTech", icon: "🔑" },
    { key: "manufacturing", title: "Manufacturing & Industry", icon: "🏭" },
    { key: "retail", title: "Retail & E-commerce", icon: "🛒" },
  ],
  [
    { key: "legal", title: "LegalTech", icon: "⚖️" },
    { key: "energy", title: "Energy & Utilities", icon: "🌬️" },
    { key: "construction", title: "Construction & Infra", icon: "👷" },
  ],
];

export default function Industries() {
  return (
    <section data-aos="fade-up"
 className={styles.section} aria-labelledby="industries-heading">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 id="industries-heading" className={styles.title}>
            Industries We Empower <br /> <span className={styles.titleAccent}>with Technology</span>
          </h2>

          <p className={styles.lead}>
            At Ara Discover Technologies, we innovate across industries, delivering
            cutting-edge digital solutions that streamline operations, enhance
            experiences, and drive growth.
          </p>
        </div>

        <div className={styles.right}>
          {/* Render three animated columns */}
          {columns.map((col, colIndex) => (
            <div key={colIndex} className={styles.column} data-col={colIndex}>
              <div className={styles.scroller}>
                {/* render items twice for seamless loop */}
                {[...col, ...col].map((item, i) => (
                  <div key={item.key + "-" + i} className={styles.card}>
                    <div className={styles.cardIcon} aria-hidden>
                      <span className={styles.emoji}>{item.icon}</span>
                    </div>
                    <div className={styles.cardText}>
                      <div className={styles.cardTitle}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
