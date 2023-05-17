import React, { useContext } from "react";

import Carousel from "react-elastic-carousel";

import { randomNFTList } from "dummyData/DUMMY_NFT_LIST";
import { CryptocurrenciesContext } from "store/cryptocurrencies-store";
import { ShoppingCartContext } from "store/shopping-card-store";

import styles from "./Advice.module.css";
/* import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem"; */
import NftBox from "components/NFT/NftBox/NftBox";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Advice = () => {
  const ShoppingCardContext = useContext(ShoppingCartContext);
  const CryptocurrencyContext = useContext(CryptocurrenciesContext);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Check our new NFTs.</p>
        <Link className={styles.link} to="/nft">
          <p className={styles.seeAll}>See all {">"}</p>
        </Link>
      </div>
      <div className={styles.adviceContainer}>
        <Carousel breakPoints={breakPoints}>
          {randomNFTList.map((nft) => {
            return (
              <NftBox
                key={nft.name}
                img={nft.img}
                artist={nft.artist}
                name={nft.name}
                price={nft.price}
                crypto={nft.crypto}
                addNft={() => ShoppingCardContext.shoppingCartAddHandler(nft)}
                priceInDollar={CryptocurrencyContext.priceInDollar(
                  nft.crypto,
                  nft.price
                )}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Advice;
