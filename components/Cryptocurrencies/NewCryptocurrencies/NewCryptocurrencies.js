import React from "react";

import styles from "../BiggestGainers/SideList.module.css";
import NewCryptoTemplate from "./NewCryptoTemplate";

const NewCryptocurrencies = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>New on Coindom</p>
        <NewCryptoTemplate name="Decentraland" code="MANA" date="May 4" />
        <NewCryptoTemplate name="Balancer" code="BAL" date="April 27" />
        <NewCryptoTemplate name="ETHLend" code="AAVE" date="April 23" />
      </div>
    </div>
  );
};

export default NewCryptocurrencies;
