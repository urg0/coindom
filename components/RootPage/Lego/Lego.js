import React from "react";

import styles from "./Lego.module.css";

const Lego = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Build the future.</h2>
          <p className={styles.text}>
            This website is open source with hundreds of community contributors.
            You can propose edits to any of the content on this site, suggest
            awesome new features, or help us squash bugs.
          </p>
        </div>

        <img className={styles.lego} src="images/lego.png" alt="lego" />
      </div>
    </>
  );
};

export default Lego;
