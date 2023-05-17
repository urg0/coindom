import React from "react";

import BiggestGainers from "components/Cryptocurrencies/BiggestGainers/BiggestGainers";
import CryptocurrencyList from "components/Cryptocurrencies/CryptocurrencyList/CryptocurrencyList";
import NewCryptocurrencies from "components/Cryptocurrencies/NewCryptocurrencies/NewCryptocurrencies";
import Trending from "components/Cryptocurrencies/Trending/Trending";

import styles from "./Cryptocurrencies.module.css";

/* import { BsSearch } from "react-icons/bs"; */

const Cryptocurrencies = () => {
  return (
    <div className={styles.bgc}>
      <div className={styles.container}>
        <img
          src="images/eth-logo-animated.gif"
          alt="gif"
          className={styles.gif}
        />
      </div>
      <div className={styles.listContainer}>
        <CryptocurrencyList />
        <div className={styles.otherListsContainer}>
          <NewCryptocurrencies />
          <BiggestGainers />
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrencies;
