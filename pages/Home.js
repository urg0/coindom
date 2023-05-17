import React from "react";

import { css } from "@emotion/css";

import Welcome from "components/WelcomePage/Welcome/Welcome";
import GetStarted from "components/WelcomePage/GetStarted/GetStarted";
import Advice from "components/ShoppingCart/Advice/Advice";
import PopularCryptocurrencies from "components/Cryptocurrencies/PopularCryptocurrencies/PopularCryptocurrencies";
import EthereumToday from "components/WelcomePage/EthereumToday/EthereumToday";
import Explore from "components/WelcomePage/Explore/Explore";
/* import Lego from "components/UI/Lego";
import BottomNavigation from "components/Navigation/BottomNavigation"; */

const HomePage = () => {
  return (
    <div
      className={css`
        background-color: rgb(30, 32, 33);
        padding-top: 10rem;
      `}
    >
      <Welcome />
      <GetStarted />
      <Advice />
      <PopularCryptocurrencies />
      <EthereumToday />
      <Explore />
      {/* <Lego />
      <BottomNavigation /> */}
    </div>
  );
};

export default HomePage;
