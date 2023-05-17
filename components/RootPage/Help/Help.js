import React from "react";

import styles from "./Help.module.css";

const Help = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Need help?</h2>
        <div className={styles.helpContainer}>
          <img className={styles.doge} src="images/doge.png" alt="doge" />
          <div className={styles.textContainer}>
            <h4 className={styles.helpTitle}>24/7 Chat Support</h4>
            <p className={styles.helpText}>
              Get 24/7 chat support with our customer service.
            </p>
          </div>
        </div>
        <div className={styles.helpContainer}>
          <img className={styles.faq} src="images/dao-2.png" alt="dao" />
          <div className={styles.textContainer}>
            <h4 className={styles.helpTitle}>FAQs</h4>
            <p className={styles.helpText}>
              View FAQs for detailed instructions on specific features.
            </p>
          </div>
        </div>
        <div className={styles.helpContainer}>
          <img
            className={styles.rhino}
            src="images/upgrade_rhino.png"
            alt="rhino"
          />
          <div className={styles.textContainer}>
            <h4 className={styles.helpTitle}>Blog</h4>
            <p className={styles.helpText}>
              Stay up to date with the latest stories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
