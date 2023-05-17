import { useContext } from "react";

/* import { css } from "@emotion/css"; */

import { CryptocurrenciesContext } from "store/cryptocurrencies-store";
import { ShoppingCartContext } from "store/shopping-card-store";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

import PayButton from "../PayButton/PayButton";
import styles from "./ShoppingCartList.module.css";

const ShoppingCart = () => {
  const shoppingContext = useContext(ShoppingCartContext);
  const cryptoContext = useContext(CryptocurrenciesContext);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.wallet} src="images/wallet.png" alt="accepted" />
        <img
          className={styles.ethAccepted}
          src="images/ethereum-accepted-here.png"
          alt="accepted"
        />
      </div>
      <div className={styles.list}>
        <p className={styles.title}>
          <img className={styles.card} src="images/card.png" alt="12" />{" "}
          <FaShoppingCart size={21} /> Your shopping cart:
        </p>

        {shoppingContext.shoppingCart?.length === 0 && (
          <div className={styles.emptyContainer}>
            <p className={styles.empty}>Your shopping cart is empty</p>
            <p className={styles.startShopping}>
              You can start buying the future on COINDOM.
            </p>
            <Link to="/nft" className={styles.getStarted}>
              Get Started <FaShoppingCart size={21} />
            </Link>
          </div>
        )}
        {shoppingContext.shoppingCart?.length !== 0 && (
          <>
            {shoppingContext.shoppingCart?.map((nft) => {
              return (
                <ShoppingCartItem
                  key={nft.name}
                  img={nft.img}
                  artist={nft.artist}
                  name={nft.name}
                  price={nft.price}
                  crypto={nft.crypto}
                  priceInDollar={cryptoContext.priceInDollar(
                    nft.crypto,
                    nft.price
                  )}
                />
              );
            })}
          </>
        )}
      </div>
     
      <PayButton />
     
    </div>
  );
};

export default ShoppingCart;
