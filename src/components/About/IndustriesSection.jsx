import React from "react";
import styles from "./IndustriesSection.module.css";

const ITEMS = [
  { key: "healthcare", title: "Healthcare", svg: "➕" },
  { key: "education", title: "Education", svg: "🧪" },
  { key: "retail", title: "Retail & E-Commerce", svg: "🛒" },
  { key: "travel", title: "Travel & Hospitality", svg: "✈️" },
  { key: "logistics", title: "Transportation & Logistics", svg: "🚚" },
  { key: "proptech", title: "RealEstate & PropTech", svg: "🔑" },
];


function Icon({ name }) {
  // replace or extend these simple inline svgs with real brand svgs if you have them
  switch (name) {
    case "health":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect rx="8" width="64" height="64" fill="none" />
          <path d="M24 36h16M32 24v24" stroke="#0ea5a4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M32 12 L8 24 L32 36 L56 24 L32 12 Z" fill="#f97316"/>
          <path d="M18 28v10c0 6 12 10 14 10s14-4 14-10V28" fill="#fff" opacity="0.0" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M16 20h36l-6 22H24z" fill="#ff7a59"/>
          <circle cx="26" cy="48" r="3.5" fill="#333" />
          <circle cx="44" cy="48" r="3.5" fill="#333" />
        </svg>
      );
    case "plane":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 34 L58 18 L44 32 L32 28 L26 40 L44 44 L6 34 Z" fill="#7fb7ff"/>
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M10 12 L24 8 L40 14 L54 10 L54 50 L40 46 L24 52 L10 48 Z" fill="#2b6cb0"/>
          <path d="M36 28a4 4 0 11-8 0 4 4 0 018 0z" fill="#f6ad55"/>
        </svg>
      );
    case "key":
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M10 34a8 8 0 1010-10 8 8 0 00-10 10z" fill="#fbbf24"/>
          <rect x="28" y="30" width="22" height="6" rx="2" fill="#fb923c"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function IndustriesSection() {
  return (
    <section  data-aos="slide-up" className={styles.section} aria-labelledby="industries-title">
      <div className={styles.backdrop} aria-hidden />
      <div className={styles.container}>
        <h2 id="industries-title" className={styles.heading}>Serving Across Industries</h2>
        <p className={styles.lead}>
          We understand that each sector has unique demands. That’s why our solutions are industry-specific,
          scalable, and tailored. Sectors we serve include:
        </p>

        <ul className={styles.cards}>
          {ITEMS.map((it, idx) => (
            <li key={it.key} className={styles.card} data-idx={idx}>
              <div className={styles.icon}>{it.svg}</div>
              <div className={styles.label}>{it.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
