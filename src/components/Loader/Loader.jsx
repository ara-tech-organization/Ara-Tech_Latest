import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.rippleWrap}>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
      </div>

      <img src="./Loader.gif" className={styles.bird} alt="Loading..." />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loader;
