import { createContext, useState, useMemo } from "react";

import { DUMMY_NFT_LIST } from "dummyData/DUMMY_NFT_LIST";

export const NFTContext = createContext({
  NFTs: [],
  setNFTs() {},
});

const NFTContextProvider = ({ children }) => {
  const [NFTs, setNFTs] = useState(DUMMY_NFT_LIST);
  const contextValue = useMemo(
    () => ({
      NFTs,
      setNFTs,
    }),
    [NFTs, setNFTs]
  );

  return (
    <NFTContext.Provider value={contextValue}>{children}</NFTContext.Provider>
  );
};

export default NFTContextProvider;
