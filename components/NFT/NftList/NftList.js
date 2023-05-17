import React, { useContext, useState } from "react";

import NftBox from "../NftBox/NftBox";
import styles from "./NftList.module.css";

import { CryptocurrenciesContext } from "store/cryptocurrencies-store";
import { NFTContext } from "store/nft-store";
import { ShoppingCartContext } from "store/shopping-card-store";

import Pagination from "components/Pagination/Pagination";
import Filter from "../FilterNFT/Filter";
import SortNfts from "../FilterNFT/SortNfts";

const NftList = () => {
  const NftContext = useContext(NFTContext);
  const ShoppingCardContext = useContext(ShoppingCartContext);
  const CryptocurrencyContext = useContext(CryptocurrenciesContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = NftContext.NFTs?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Newest arrivals.</p>
      <SortNfts />

      <div className={styles.nftListContainer}>
        <div>
          <Filter />
        </div>

        <div className={styles.nftGrid}>
          {currentPosts.map((nft) => {
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
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={NftContext.NFTs?.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NftList;
