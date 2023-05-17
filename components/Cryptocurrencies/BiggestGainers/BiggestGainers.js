import React from "react";

import styles from "./SideList.module.css";

import BiggestGainersTemplate from "./BiggestGainersTemplate";

const BiggestGainers = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Biggest Gainers</p>
      <BiggestGainersTemplate
        code="SOL"
        name="Solana"
        price="$25.3"
        change="%12.30"
      />
      <BiggestGainersTemplate
        code="AVAX"
        name="Avalanche"
        price="$17.8"
        change="%11.43"
      />
      <BiggestGainersTemplate
        code="SHIBA"
        name="Shiba INU"
        price="$9.46"
        change="%10.87"
      />
    </div>
  );
};

export default BiggestGainers;
