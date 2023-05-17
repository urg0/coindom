import React from "react";

import styles from "./SideListTemplate.module.css";

const BiggestGainersTemplate = ({ code, name, price, change }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.nameContainer}>
        <img className={styles.logo} src={`images/${code}.png`} alt="logo" />
        <div>
          <p className={styles.cryptoName}>{name}</p>
          <h2 className={styles.cryptoCode}>{code}</h2>
        </div>
      </div>
      <div>
        <p className={styles.price}>{price}</p>
        <p className={change.includes("-") ? styles.red : styles.green}>
          {change}
        </p>
      </div>
    </div>
  );
};

export default BiggestGainersTemplate;
