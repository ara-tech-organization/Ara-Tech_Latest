import React, { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false); // desktop hover bg
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile/tablet
  const [open, setOpen] = useState(null); // which mobile section is open

  const toggleSection = (key) => setOpen((prev) => (prev === key ? null : key));

  return (
    <header
      className={`${styles.header} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.logo} onClick={() => setIsMenuOpen(false)}>
        <span className={styles.icon}></span>
        <span>ARA</span>
      </div>

      {/* Hamburger (shown <768px) */}
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobilePanel"
        onClick={() => setIsMenuOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Desktop nav (≥768px) */}
      <nav className={styles.nav}>
        <Link to="Ara-Tech/organisation" className={styles.menuItem}>
          Organisation{" "}
          {/* <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} /> */}
        </Link>

        <div className={styles.menuItem}>
          Solutions{" "}
          <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
          <div className={styles.dropdown}>
            <a href="#">Customer Support</a>
            <a href="#">IT Teams</a>
          </div>
        </div>

        <div className={styles.menuItem}>Enterprise</div>

        <div className={styles.menuItem}>
          Resources{" "}
          <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
          <div className={styles.dropdown}>
            <a href="#">Blog</a>
            <a href="#">Guides</a>
          </div>
        </div>
      </nav>

      <button className={styles.demoBtn}>Get A Demo</button>

      {/* Mobile/Tablet panel (<768px) */}
      <div
        id="mobilePanel"
        className={`${styles.mobilePanel} ${isMenuOpen ? styles.open : ""}`}
      >
        <button
          className={styles.mobileParent}
          onClick={() => toggleSection("products")}
          aria-expanded={open === "products"}
        >
          <span>Products</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.caret} ${
              open === "products" ? styles.rot : ""
            }`}
          />
        </button>
        <div
          className={`${styles.mobileSub} ${
            open === "products" ? styles.subOpen : ""
          }`}
        >
          <a href="#">Help Desk</a>
          <a href="#">Live Chat</a>
          <a href="#">Automation</a>
        </div>

        <button
          className={styles.mobileParent}
          onClick={() => toggleSection("solutions")}
          aria-expanded={open === "solutions"}
        >
          <span>Solutions</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.caret} ${
              open === "solutions" ? styles.rot : ""
            }`}
          />
        </button>
        <div
          className={`${styles.mobileSub} ${
            open === "solutions" ? styles.subOpen : ""
          }`}
        >
          <a href="#">Customer Support</a>
          <a href="#">IT Teams</a>
        </div>

        <a className={styles.mobileLink} href="#">
          Enterprise
        </a>

        <button
          className={styles.mobileParent}
          onClick={() => toggleSection("resources")}
          aria-expanded={open === "resources"}
        >
          <span>Resources</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.caret} ${
              open === "resources" ? styles.rot : ""
            }`}
          />
        </button>
        <div
          className={`${styles.mobileSub} ${
            open === "resources" ? styles.subOpen : ""
          }`}
        >
          <a href="#">Blog</a>
          <a href="#">Guides</a>
        </div>

        <button
          className={`${styles.demoBtn} ${styles.mobileCTA}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Get A Demo
        </button>
      </div>
    </header>
  );
};

export default Header;
