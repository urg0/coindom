import { createContext, useState, useMemo } from "react";

/* import { DUMMY_NFT_LIST } from "dummyData/DUMMY_NFT_LIST"; */

export const ShoppingCartContext = createContext({
  shoppingCart: [],
  setShoppingCart() {},
});

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const deleteNft = (name) => {
    const filteredShoppingCart = shoppingCart.filter((nft) => {
      return nft.name !== name;
    });
    setShoppingCart(filteredShoppingCart);
  };

  const shoppingCartAddHandler = (nft) => {
    if (shoppingCart?.indexOf(nft) !== -1) return;
    setShoppingCart((prev) => {
      return [...prev, nft];
    });
  };

  const contextValue = useMemo(
    () => ({
      shoppingCart,
      setShoppingCart,
      deleteNft,
      shoppingCartAddHandler,
    }),
    [shoppingCart]
  );

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
