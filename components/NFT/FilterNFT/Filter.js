import React, { useContext } from "react";

import styles from "./Filter.module.css";
import { NFTContext } from "store/nft-store";
import { DUMMY_NFT_LIST } from "dummyData/DUMMY_NFT_LIST";
import CategoryCheckBox from "./CheckBox/CategoryCheckBox";
import CurrencyOption from "./CurrencyOption";
/* import SortNfts from "./SortNfts"; */

const Filter = () => {
  const context = useContext(NFTContext);

  const clearFilterHandler = () => {
    context.setNFTs(DUMMY_NFT_LIST);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Find your nft.</p>
      {/* <SortNfts /> */}
      <CategoryCheckBox clearFilterHandler={clearFilterHandler} />
      <CurrencyOption />
    </div>
  );
};

export default Filter;
