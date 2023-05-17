import React from "react";

import styles from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.portfolioContainer}>
          <div>
            <h2 className={styles.title}>Build your crypto portfolio</h2>
            <p className={styles.title2}>Start your first trade.</p>
          </div>
          <img className={styles.mac} src="images/mac.png" alt="iphone" />
        </div>

        <div className={styles.steps}>
          <img
            className={styles.computer}
            src="images/hackathon_transparent.png"
            alt="open-your-computer"
          />
          <div className={styles.stepText}>
            <h3 className={styles.stepTitle}>Open your computer.</h3>
            <p>
              Oh, not that way. "Power on" your computer, go to{" "}
              <a className={styles.link} href="/">
                coindom.com
              </a>{" "}
              and sign-up.
            </p>
          </div>
        </div>
        <div className={styles.steps}>
          <img
            className={styles.dollar}
            src="images/dollar-to-eth.png"
            alt="open-your-computer"
          />
          <div className={styles.stepText}>
            <h3 className={styles.stepTitle}>Fund your account.</h3>
            <p>
              Add funds to your crypto account to start trading crypto. You can
              add funds
            </p>
            <p>with a variety of payment methods.</p>
          </div>
        </div>
        <div className={styles.steps}>
          <img
            className={styles.doge}
            src="images/ethereum-learn.png"
            alt="open-your-computer"
          />
          <div className={styles.stepText}>
            <h3 className={styles.stepTitle}>Buy the future.</h3>
            <p>
              You're in! Buy/sell crypto, set up recurring buys for your
              investments,
            </p>
            <p>and discover what Coindom has to offer.</p>
          </div>
        </div>
        <img className={styles.home} src="images/home.png" alt="home" />
      </div>
      {/*   <div className={styles.imageContainer}>
         <img className={styles.mac} src="images/mac.png" alt="iphone" /> 
        <img className={styles.iphone} src="images/iphoneNft5.png" alt="mac" />
      </div> */}
    </div>
  );
};

export default GetStarted;
