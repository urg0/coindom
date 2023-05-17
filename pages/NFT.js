import React from "react";

import NftList from "components/NFT/NftList/NftList";
import NftWelcomePage from "components/NFT/NftWelcomePage/NftWelcomePage";

const NFT = () => {
  return (
    <div>
      <NftWelcomePage />
      <NftList />
    </div>
  );
};

export default NFT;
