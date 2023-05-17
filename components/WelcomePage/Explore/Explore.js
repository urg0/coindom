import React from "react";

import styles from "./Explore.module.css";

const Explore = () => {
  return (
    <>
      <h2 className={styles.exploreEth}>Explore ETHEREUM</h2>
      <div className={styles.container}>
        <div className={styles.exploreContainer}>
          <img className={styles.merge} src="images/wallet.png" alt="merge" />
          <h1 className={styles.title}>Level up your knowledge</h1>
          <p className={styles.text}>
            The Ethereum road-map consists of interconnected upgrades designed
            to make the network more scalable, secure and sustainable.
          </p>
        </div>
        <div className={styles.exploreContainer}>
          <img
            className={styles.enterprise}
            src="images/enterprise-eth.png"
            alt="merge"
          />
          <h1 className={styles.title}>The Ethereum community</h1>
          <p className={styles.text}>
            Ethereum is all about community. It's made up of people from all
            different backgrounds and interests. The Ethereum community is home
            to hundreds of thousands of developers, technologists, designers,
            users, HODLers and enthusiasts. See how can you join in.
          </p>
        </div>
        <div className={styles.exploreContainer}>
          <img className={styles.eth} src="images/ethComp.png" alt="merge" />
          <h1 className={styles.title}>Ethereum for enterprise</h1>
          <p className={styles.text}>
            See how Ethereum can open up new business models, reduce your cost
            and future-proof your business
          </p>
        </div>
      </div>
    </>
  );
};

export default Explore;
