import React, { useContext } from "react";

import styles from "./CheckBox/CategoryCheckBox.module.css";

import { NFTContext } from "store/nft-store";

import { DUMMY_CURRENCIES } from "dummyData/DUMMY_CURRENCIES";

const CurrencyOption = () => {
  const context = useContext(NFTContext);

  const sortHandler = (event) => {
    context.setNFTs((prevNFTs) => {
      return prevNFTs.filter((nft) => {
        return nft.crypto === event.target.value;
      });
    });
  };
  return (
    <div className={styles.categories}>
      <select
        className={styles.selectCurrency}
        name="sort"
        id="sort"
        onChange={sortHandler}
      >
        <option disabled selected value="">
          Select Currency
        </option>
        {DUMMY_CURRENCIES}
      </select>
    </div>
  );
};

export default CurrencyOption;
