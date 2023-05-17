import React, { useContext, useState } from "react";
import { CryptocurrenciesListTitle } from "dummyData/CryptocurrenciesListTitle";
import { CryptocurrenciesContext } from "store/cryptocurrencies-store";
import Pagination from "components/Pagination/Pagination";
import styles from "./CryptocurrencyList.module.css";

const CryptocurrencyList = () => {
  const context = useContext(CryptocurrenciesContext);
  const [enteredCrypto, setEnteredCrypto] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const filteredPosts = context.cryptocurrencies.data?.filter((d) =>
    d.pair.toLowerCase().includes(enteredCrypto.toLowerCase())
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.cryptocurrenciesContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search for an asset with crypto code"
          value={enteredCrypto}
          onChange={(e) => setEnteredCrypto(e.target.value)}
        />
        {CryptocurrenciesListTitle}
        {currentPosts?.map((d) => {
          return (
            <div className={styles.infoContainer} key={d.pair}>
              <div className={styles.nameContainer}>
                <img
                  className={styles.logo}
                  src={`images/${d.pair.slice(0, -4)}.png`}
                  alt="logo"
                />
                <h2 className={styles.cryptoName}>{d.pair.slice(0, -4)}</h2>
                <p className={styles.cryptoLongName}>/ USD</p>
              </div>

              <p className={styles.lastPrice}>
                ${((d.last / 1).toFixed(2) * 1).toLocaleString()}
              </p>
              <p
                className={
                  d.priceChangePercentage.includes("-")
                    ? styles.red
                    : styles.green
                }
              >
                %{d.priceChangePercentage}
              </p>
              <p className={styles.volumeP}>
                ${((d.volume30d * d.last) / 100000).toFixed(3)}M
              </p>
              <p className={styles.marketCap}>$560,24B</p>
            </div>
          );
        })}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts?.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default CryptocurrencyList;
