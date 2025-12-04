import React, { useState, useRef } from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const headerRef = useRef();

  const toggleSection = (key) => setOpen((prev) => (prev === key ? null : key));

  const handleDemoDownload = () => {
    const link = document.createElement("a");
    link.href = "./ara-demo.pdf"; // path in /public
    link.download = "ARA Discover Technologies Broucher.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helpers for desktop hover of Solutions
  const handleSolutionsEnter = () => {
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    setSolutionsOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isHovered ? styles.hovered : ""} ${
        isMenuOpen ? styles.mobileActive : ""
      }`}
    >
      <div className={styles.logo} onClick={() => setIsMenuOpen(false)}>
        <img
          src="./Ara Discoveries.png"
          alt="ARA Logo"
          className={styles.logoImg}
        />
      </div>

      <button
        className={`${styles.hamburger} ${
          isMenuOpen ? styles.hamburgerActive : ""
        }`}
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
        <NavLink
          to="Ara-Tech/"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="Ara-Tech/about"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.activeLink : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="Ara-Tech/works"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Our Works
        </NavLink>

        {/* SOLUTIONS trigger (hover on desktop) */}
        <div
          className={styles.menuItem}
          onMouseEnter={handleSolutionsEnter}
          onMouseLeave={handleSolutionsLeave}
        >
          <Link
            type="button"
            className={`${styles.solBtn} ${
              solutionsOpen ? styles.activeLink : ""
            }`}
            aria-expanded={solutionsOpen}
            aria-haspopup="true"
          >
            Our Product
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.chevron} ${solutionsOpen ? styles.rot : ""}`}
            />
          </Link>
        </div>

        <NavLink
          to="Ara-Tech/organisation"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Organisation
        </NavLink>

        <NavLink
          to="Ara-Tech/contact"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>

      <button className={styles.demoBtn} onClick={handleDemoDownload}>
        Get A Broucher
      </button>

      {/* FULL-WIDTH SOLUTIONS PANEL (desktop) */}
      <div
        className={`${styles.solutionsPanel} ${
          solutionsOpen ? styles.show : ""
        }`}
        aria-hidden={!solutionsOpen}
        onMouseEnter={handleSolutionsEnter}
        onMouseLeave={handleSolutionsLeave}
      >
        <div className={styles.panelInner}>
          <Link to="https://araschoolmate.com/" className={styles.cardLink}>
            <div className={styles.solutionCard}>
              <p className={styles.solText}>PRODUCT</p>

              <div className={styles.solHeader}>
                <div className={styles.emojiWrap}>
                  <img
                    src="./mini.webp"
                    alt="SchoolMate Icon"
                    className={styles.emojiImg}
                  />
                </div>
                <h3>SchoolMate</h3>
              </div>

              <p className={styles.solText}>
                SchoolMate is a smart platform for easy school management and
                parent communication.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile/Tablet panel */}
      <div
        id="mobilePanel"
        className={`${styles.mobilePanel} ${isMenuOpen ? styles.open : ""}`}
      >
        <NavLink
          to="Ara-Tech/"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ""}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="Ara-Tech/about"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ""}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>

        {/* Mobile Solutions accordion (click) */}
        <Link
          className={`${styles.mobileParent} ${
            open === "solutions" ? styles.activeMobileLink : ""
          }`}
          onClick={() => toggleSection("solutions")}
          aria-expanded={open === "solutions"}
          aria-controls="mobileSolutions"
        >
          Our Product
          <span
            className={`${styles.caret} ${
              open === "solutions" ? styles.rot : ""
            }`}
          >
            ▾
          </span>
        </Link>

        <div
          id="mobileSolutions"
          className={`${styles.mobileSub} ${
            open === "solutions" ? styles.subOpen : ""
          }`}
        >
          <NavLink
            to="https://araschoolmate.com/"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            SchoolMate
          </NavLink>
        </div>

        <NavLink
          to="Ara-Tech/organisation"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ""}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Organisation
        </NavLink>

        <NavLink
          to="Ara-Tech/contact"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ""}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>

        <button
          className={`${styles.demoBtn} ${styles.mobileCTA}`}
          onClick={() => {
            handleDemoDownload();
            setIsMenuOpen(false);
          }}
        >
          Get A Broucher
        </button>
      </div>
    </header>
  );
};

export default Header;
