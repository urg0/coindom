import React from "react";

import styles from "./CheckBox/CategoryCheckBox.module.css";

const SortNfts = () => {
  return (
    <div className={styles.categories}>
      <select className={styles.sort} name="sort" id="sort">
        <option disabled selected value="">
          Sort by: URG
        </option>
      </select>
    </div>
  );
};

export default SortNfts;
