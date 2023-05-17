import React from "react";

import styles from "../BiggestGainers/SideListTemplate.module.css";

const NewCryptoTemplate = ({ name, code, img, date }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.nameContainer}>
        <img className={styles.logo} src={`images/${code}.png`} alt="logo" />
        <div>
          <p className={styles.cryptoName}>{name}</p>
          <h2 className={styles.cryptoCode}>{code}</h2>
        </div>
      </div>
      <p className={styles.date}>Added {date}</p>
    </div>
  );
};

export default NewCryptoTemplate;
