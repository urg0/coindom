import React, { useContext, useState, useEffect } from "react";

import { CryptocurrenciesContext } from "store/cryptocurrencies-store";
import { ShoppingCartContext } from "store/shopping-card-store";

import styles from "./PayButton.module.css";

const PayButton = () => {
  const shoppingContext = useContext(ShoppingCartContext);
  const cryptoContext = useContext(CryptocurrenciesContext);

  const prices = shoppingContext.shoppingCart.map((nft) => {
    return nft.price * cryptoContext.cryptoPrices[nft.crypto.toLowerCase()];
  });

  const dollarPrice = prices.reduce((a, b) => a + b, 0);

  const [totalPrice, setTotalPrice] = useState(dollarPrice.toFixed(3));
  const [currency, setCurrency] = useState("dollar");

  useEffect(() => {
    const priceInSelectedCurrency = (crypto) => {
      const cryptoPrice = dollarPrice / cryptoContext.cryptoPrices[crypto];
      return cryptoPrice.toFixed(3);
    };

    if (currency === "dollar") {
      setTotalPrice(dollarPrice.toFixed(3));
    } else {
      setTotalPrice(priceInSelectedCurrency(currency));
    }
  }, [
    shoppingContext.shoppingCart,
    cryptoContext.cryptoPrices,
    currency,
    dollarPrice,
  ]);

  const onCurrencyChangeHandler = (event) => {
    setCurrency(event.target.alt);
  };

  const dollarHandler = (event) => {
    setCurrency("dollar");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.priceContainer}>
          <p className={styles.total}>
            {" "}
            Total of:
            <img
              className={styles.currency}
              src={`images/${currency}.png`}
              alt="currency"
            />
            {shoppingContext.shoppingCart.length === 0
              ? 0
              : (totalPrice * 1).toLocaleString()}{" "}
            {/* ETH */}
          </p>
        </div>

        <p className={styles.paymentMethod}>select payment method:</p>
        <div
          onClick={onCurrencyChangeHandler}
          className={styles.cryptoContainer}
        >
          <img className={styles.crypto} src="images/avax.png" alt="avax" />
          <img className={styles.crypto} src="images/sol.png" alt="sol" />
          <img className={styles.eth} src="images/eth.png" alt="eth" />
          <img className={styles.crypto} src="images/cake.png" alt="cake" />
          <img className={styles.crypto} src="images/mana.png" alt="mana" />
        </div>
        <div onClick={dollarHandler} className={styles.paymentContainer}>
          <img
            className={styles.apple}
            src="https://help.apple.com/assets/63BCA8F46048E91596771871/63BCA8F56048E9159677187F/tr_TR/01c465bae7fcb9a8c340c3f455fef0ec.png"
            alt="dollar"
          />

          <img className={styles.apple} src="images/visa.png" alt="dollar" />
        </div>
      </div>
    </div>
  );
};

export default PayButton;
