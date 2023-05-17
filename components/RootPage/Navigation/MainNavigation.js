import React, { useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "store/shopping-card-store";

import styles from "./MainNavigation.module.css";

import { FaGift, FaRegMoon, FaShoppingCart } from "react-icons/fa";

const MainNavigation = () => {
  const context = useContext(ShoppingCartContext);

  const numberOfItems = context.shoppingCart.length;

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const navLinkStyle = ({ isActive }) => {
    return isActive ? styles.active : styles.link;
  };

  return (
    <div className={styles.navigation}>
      <nav className={styles.navigationContainer}>
        <img
          className={styles.eth}
          src="images/eth.png"
          alt="ETH_LOGO"
          onClick={navigateHandler}
        />
        <h2 className={styles.title}>COINDOM</h2>

        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/cryptocurrencies" className={navLinkStyle}>
          Cryptocurrencies
        </NavLink>
        <NavLink to="/soon" className={navLinkStyle}>
          Buy Crypto
        </NavLink>
        <NavLink to="/nft" className={navLinkStyle}>
          NFT
        </NavLink>
        <NavLink to="/news" className={navLinkStyle}>
          News
        </NavLink>

        <div className={styles.others}>
          <NavLink to="/soon" className={styles.otherNav}>
            Login
          </NavLink>
          <NavLink to="/soon" className={styles.otherNav}>
            <FaGift />
          </NavLink>
          <NavLink to="/soon" className={styles.otherNav}>
            |USD|
          </NavLink>
          <NavLink to="/shopping-cart" className={styles.otherNav}>
            <FaShoppingCart size={25} />
            {numberOfItems}
          </NavLink>
          <NavLink to="/soon" className={styles.otherNav}>
            <FaRegMoon />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
