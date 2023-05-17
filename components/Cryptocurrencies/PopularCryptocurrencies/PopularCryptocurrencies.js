import React from "react";

import styles from "./PopularCryptocurrencies.module.css";

import NewCryptocurrencies from "components/Cryptocurrencies/NewCryptocurrencies/NewCryptocurrencies";
import BiggestGainers from "components/Cryptocurrencies/BiggestGainers/BiggestGainers";
import Trending from "components/Cryptocurrencies/Trending/Trending";

const PopularCryptocurrencies = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {"<"}PopularCryptocurrencies{">"}
      </p>
      <div className={styles.listContainer}>
        <NewCryptocurrencies />
        <BiggestGainers />
        <Trending />
      </div>
    </div>
  );
};

export default PopularCryptocurrencies;
