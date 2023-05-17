import React from "react";

import New from "../SingleNew/New";
import styles from "./NewsList.module.css";

import { DUMMY_NEWS } from "dummyData/DUMMY_NEWS";

const News = () => {
  return (
    <>
      <div className={styles.newsContainer}>
        <div className={styles.breakingNew}>
          <h1 className={styles.title}>merge.eth</h1>
          <h2 className={styles.new}>
            Learn the latest news about ETHEREUM Merge.{" "}
          </h2>
          <img
            className={styles.newsImg}
            src="images/ethereum-learn.png"
            alt="news"
          />
        </div>
        <div className={styles.news}>
          {DUMMY_NEWS.map(({ title, img }) => {
            return <New key={title} title={title} img={img} />;
          })}
        </div>
      </div>
    </>
  );
};

export default News;
