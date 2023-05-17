import React from "react";
import BiggestGainersTemplate from "../BiggestGainers/BiggestGainersTemplate";

import styles from "../BiggestGainers/SideList.module.css";

const Trending = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>24h Trending</p>
      <BiggestGainersTemplate
        code="ETH"
        name="Ethereum"
        price="1965.50"
        change="%3.30"
      />
      <BiggestGainersTemplate
        code="CAKE"
        name="PancakeSwap"
        price="$2.52"
        change="%-1.99"
      />
      <BiggestGainersTemplate
        code="WOO"
        name="WooTrade"
        price="$0.26"
        change="%-3.07"
      />
    </div>
  );
};

export default Trending;
