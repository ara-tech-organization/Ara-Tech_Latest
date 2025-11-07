import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>FreshWorks</h3>
            <p className={styles.tagline}>
              Empowering teams with AI, insights, and simplicity.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="#">Freshdesk</a></li>
                <li><a href="#">Freshservice</a></li>
                <li><a href="#">Freshsales</a></li>
                <li><a href="#">Freshmarketer</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">Reports</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} FreshWorks Inc. All rights reserved.
          </p>
          <ul className={styles.socials}>
            <li>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
