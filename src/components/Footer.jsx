import React from "react";
import styles from "./Footer.module.css";
import logo from "../../src/assets/Ara Discoveries.png"; // <- update path to your logo

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* top row: logo | links+products | contact+map */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <img src={logo} alt="ARA Discoveries" className={styles.logo} />
            <div className={styles.pitch}>
              <div>Innovating Digital Solutions for a <br></br>Smarter Tomorrow</div>
              {/* <div className={styles.pitchAccent}>Innovating Digital Solutions for a <br></br>Smarter Tomorrow</div> */}
            </div>
          </div>

          <div className={styles.linksWrap}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick links</h4>
              <ul className={styles.list}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#organisation">Organisation</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Products</h4>
              <ul className={styles.list}>
                <li><a href="#schoolmate">Schoolmate</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.colTitle}>Contact</h4>
            {/* <address className={styles.address}>
              <div><strong>ARA Discoveries Pvt Ltd</strong></div>
              <div>67A, Giri Rd, Srinivasapuram,</div>
              <div>Balaganapathy Nagar, Thanjavur,</div>
              <div>Tamil Nadu 613009</div>
              <a href="tel:+918110015152" className={styles.contactLink}>+91 8110015152</a><br />
              <a href="mailto:aradiscovertechnologies@gmail.com" className={styles.contactLink}>aradiscovertechnologies@gmail.com</a>
            </address> */}

            <div className={styles.mapWrap} aria-hidden>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3399244243515!2d79.1271482!3d10.785256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab986fba40a6b%3A0xc60663bc6b08e04e!2sARA%20Discoveries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1762951039746!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* bottom row */}
        <div className={styles.bottomRow}>
          <div className={styles.copy}>© {year} ARA Discoveries Pvt Ltd. All rights reserved.</div>

          <div className={styles.socials}>
            <a className={`${styles.social} ${styles.linkedin}`} href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM9 8h4.8v2.2h.1c.7-1.2 2.5-2.2 4.9-2.2 5.2 0 6.2 3.4 6.2 7.8V24h-5V16.6c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4v7.6H9V8z"/></svg>
            </a>

            <a className={`${styles.social} ${styles.facebook}`} href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M22 12A10 10 0 1012 22V14.7h-2v-2.7h2V10c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.7h-1.9V22A10 10 0 0022 12z"/></svg>
            </a>

            <a className={`${styles.social} ${styles.instagram}`} href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.3.8.6 1.2 1 .4.4.7.8 1 1.2.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.5-.6.8-1 1.2-.4.4-.8.7-1.2 1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.3-.8-.6-1.2-1-.4-.4-.7-.8-1-1.2-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.5.6-.8 1-1.2.4-.4.8-.7 1.2-1 .4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 0 5.6 0 4.6.1 3.8.3 3 .5 2.3.9 1.6 1.6.9 2.3.5 3 0 3.8.1 4.6 0 5.6 0 7c0 1.3 0 1.7 0 4.9s0 3.6.1 4.9c.1 1.2.3 1.9.5 2.3.3.5.6.8 1 1.2.4.4.8.7 1.2 1 .4.2 1.1.4 2.3.5 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 1.9-.3 2.3-.5.5-.3.8-.6 1.2-1 .4-.4.7-.8 1-1.2.2-.4.4-1.1.5-2.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.3-1.9-.5-2.3-.3-.5-.6-.8-1-1.2-.4-.4-.8-.7-1.2-1-.4-.2-1.1-.4-2.3-.5C15.6.1 15.2 0 12 0zM12 5.8A6.2 6.2 0 1018.2 12 6.2 6.2 0 0012 5.8zm0 10.2A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.9a1.4 1.4 0 11-1.4-1.4 1.4 1.4 0 011.4 1.4z"/></svg>
            </a>

            <a className={`${styles.social} ${styles.whatsapp}`} href="https://wa.me/919876543210" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0012 .5 11.76 11.76 0 00.5 12c0 2.06.54 4.02 1.56 5.74L.5 23.5l5.83-1.52A11.76 11.76 0 0012 23.5c6.34 0 11.5-5.16 11.5-11.5 0-3.07-1.2-5.95-3.98-8.52zM12 21.5c-1.76 0-3.48-.47-4.98-1.36l-.36-.21-3.46.9.92-3.37-.24-.34A9.52 9.52 0 012.5 12 9.5 9.5 0 1112 21.5zm5.2-7.2c-.28-.14-1.66-.83-1.92-.92-.26-.09-.44-.14-.62.14s-.71.92-.87 1.11c-.16.2-.33.22-.61.08-.28-.14-1.18-.43-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.18.18-.28.28-.47.09-.19.05-.36-.03-.5-.09-.14-.62-1.5-.85-2.07-.22-.54-.45-.46-.62-.47-.16-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.18 2.02 3.16 4.9 4.3 2.16.94 2.98.99 3.22.93.25-.06 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
