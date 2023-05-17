import React, { useContext, useState /* useEffect */ } from "react";

import { NFTContext } from "store/nft-store";
import { DUMMY_NFT_LIST } from "dummyData/DUMMY_NFT_LIST";

import styles from "./CategoryCheckBox.module.css";

//FIXME:UNCHECK
const CategoryCheckBox = () => {
  const context = useContext(NFTContext);

  const clearFilterHandler = () => {
    context.setNFTs(DUMMY_NFT_LIST);
    setCheckboxes({
      monke: false,
      art: false,
      racing: false,
      weed: false,
      freud: false,
      penguin: false,
      tvSeries: false,
      other: false,
    });
  };

  const [checkboxes, setCheckboxes] = useState({
    monke: false,
    art: false,
    racing: false,
    weed: false,
    freud: false,
    penguin: false,
    tvSeries: false,
    other: false,
  });

  const clickHandler = (event) => {
    const { name } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !checkboxes[name],
    }));

    context.setNFTs((prevNFTs) => {
      return prevNFTs.filter((nft) => {
        return nft.category?.includes(event.target.name);
      });
    });
  };

  /* const trueKeys = Object.keys(checkboxes).filter(
    (key) => checkboxes[key] === true
  );
  console.log(trueKeys);
 */

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Select category:</p>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="monke"
            checked={checkboxes.monke}
            onChange={(e) => clickHandler(e)}
          />
          MONKE
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="art"
            checked={checkboxes.art}
            onChange={clickHandler}
          />
          ART
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="racing"
            checked={checkboxes.racing}
            onChange={clickHandler}
          />
          RACING
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="weed"
            checked={checkboxes.weed}
            onChange={clickHandler}
          />
          SMOKE
        </label>

        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="freud"
            checked={checkboxes.freud}
            onChange={clickHandler}
          />
          FREUD
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="TV Series"
            checked={checkboxes.tvSeries}
            onChange={clickHandler}
          />
          TV SERIES
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="penguin"
            checked={checkboxes.penguin}
            onChange={clickHandler}
          />
          PENGUIN
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="other"
            checked={checkboxes.other}
            onChange={clickHandler}
          />
          OTHER
        </label>
        <button className={styles.clearFilters} onClick={clearFilterHandler}>
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default CategoryCheckBox;
