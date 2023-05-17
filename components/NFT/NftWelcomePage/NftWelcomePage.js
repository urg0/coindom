import React from "react";

import styles from "./NftWelcomePage.module.css";

const NftWelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.eminem}
          src="/images/NFT/eminem.png"
          alt="eminem"
        />
        <img
          className={styles.monalisa}
          src="/images/NFT/monalisa.png"
          alt="monalisa"
        />
        <img className={styles.snoop} src="/images/NFT/snoop.png" alt="snoop" />
        <img className={styles.disco} src="/images/NFT/disco.png" alt="disco" />
        <img
          className={styles.moonbirds}
          src="/images/NFT/moonbirds.png"
          alt="moonbirds"
        />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Explore, collect & trade NFTs with Ethereum.
        </h2>
        <button className={styles.getStarted}>Get started</button>
      </div>
    </div>
  );
};

export default NftWelcomePage;
