import React from "react";

import styles from "./New.module.css";

const New = ({ title, img }) => {
  return (
    <>
      <div className={styles.news}>
        <img src={img} alt="news" className={styles.newsImage} />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </>
  );
};

export default New;
