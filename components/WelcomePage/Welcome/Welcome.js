import React from "react";

/* import { NavLink } from "react-router-dom"; */

import styles from "./Welcome.module.css";

import { FaGift } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const Welcome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.ethTitle}>Buy ETHEREUM,</p>
          <img
            className={styles.logo}
            src="/images/ethereum3.png"
            alt="eth-logo"
          />
          <p className={styles.ethTitle}>Buy the Future.</p>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.signup}>
            <h3 className={styles.title}>
              Buy, trade, and hold 350+ cryptocurrencies on Coindom.
            </h3>

            <p>
              {" "}
              <FaGift color="hotpink" /> Trade ETH for free {">"}
            </p>

            <button className={styles.signupButton}>
              Sign-up with Email or Phone
            </button>
            <p className={styles.continueP}>or continue with</p>
            <div className={styles.continue}>
              <button className={styles.google}>
                {" "}
                <FcGoogle /> Google
              </button>
              <button className={styles.google}>
                {" "}
                <AiFillApple /> Apple
              </button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.card} src="/images/card.png" alt="card" />
            <img
              className={styles.ethInside}
              src="/images/ethereum-inside.png"
              alt="eth-inside"
            />
          </div>
          <img className={styles.nft} src="/images/nft1.png" alt="nft-1" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2 className={styles.header}>$38 billion</h2>
            <p className={styles.infoText}>24h trading volume</p>
            <p className={styles.infoText}>on Coindom exchange</p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.header}>350+</h2>
            <p className={styles.infoText}>Cryptocurrencies listed</p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.header}>120 million</h2>
            <p className={styles.infoText}>Registered users</p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.header}>{"<"}0.10%</h2>
            <p className={styles.infoText}>Lowest transaction fees</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
