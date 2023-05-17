import React from "react";

import styles from "./Footer.module.css";

import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className={styles.appStoreContainer}>
        <img
          className={styles.appStore}
          src="images/appStore.png"
          alt="appStore"
        />
        <div>
          <AiFillMediumCircle size={70} />
          <a
            className={styles.github}
            rel="noreferrer"
            target="_blank"
            href="https://github.com/urg0"
          >
            <AiFillGithub size={70} />
          </a>
          <AiFillTwitterCircle size={70} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.listContainer}>
          <h3 className={styles.title}>Use Ethereum</h3>
          <ul className={styles.list}>
            <li>Find wallet</li>
            <li>Get ETH</li>
            <li>dapps</li>
            <li>Layer 2</li>
            <li>Stake ETH</li>
            <li>Run a node</li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3 className={styles.title}>Learn</h3>
          <ul className={styles.list}>
            <li>What is Ethereum?</li>
            <li>What is ether (ETH)?</li>
            <li>Ethereum wallets</li>
            <li>Ethereum Whitepaper</li>
            <li>Ethereum road-map</li>
            <li>Blockchain bridges</li>
            <li>Ethereum energy consumption</li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3 className={styles.title}>Ecosystem</h3>
          <ul className={styles.list}>
            <li>Community Hub</li>
            <li>Ethereum Foundation</li>
            <li>Ethereum bug bounty program</li>
            <li>Ecosystem Grant Programs</li>
            <li>Ethereum brand assets</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3 className={styles.title}>About Coindom</h3>
          <ul className={styles.list}>
            <li>About us</li>
            <li>Contributing</li>
            <li>Language support</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <footer> Coindom © 2023 </footer>
        <footer className={styles.urg}> URG</footer>
      </div>
    </div>
  );
};

export default Footer;
