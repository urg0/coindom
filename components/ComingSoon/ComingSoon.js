import React from "react";

import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>coming soon...</h1>
      <img className={styles.cat} src="images/cat.gif" alt="working" />
      <p className={styles.message}>do not worry, working on it!</p>
    </div>
  );
};

export default ComingSoon;
