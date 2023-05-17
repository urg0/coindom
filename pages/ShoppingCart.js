import React from "react";

import { css } from "@emotion/css";

import Advice from "components/ShoppingCart/Advice/Advice";
import ShoppingCartList from "components/ShoppingCart/ShoppingCartList/ShoppingCartList";

const ShoppingCart = () => {
  return (
    <div
      className={css`
        background-color: rgb(30, 32, 33);
      `}
    >
      <ShoppingCartList />
      <Advice />
    </div>
  );
};

export default ShoppingCart;
