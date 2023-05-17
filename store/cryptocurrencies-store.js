import { createContext, useMemo, useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

export const CryptocurrenciesContext = createContext({
  cryptocurrencies: [],
  setCryptocurrencies() {},
  isLoading: false,
});

const CryptocurrenciesContextProvider = ({ children }) => {
  const {
    data: cryptocurrencies,
    setData: setCryptocurrencies,
    isLoading,
  } = useFetch(" https://cex.io/api/tickers/USD");

  const [cryptoPrices, setCryptoPrices] = useState({
    eth: 1,
    avax: 1,
    sol: 1,
    mana: 1,
    cake: 1,
  });

  useEffect(() => {
    const fetchSingleCrypto = (crypto) => {
      fetch(`https://cex.io/api/last_price/${crypto}/USD`)
        .then((response) => response.json())
        .then((data) => {
          setCryptoPrices((prevPrices) => {
            return {
              ...prevPrices,
              [crypto.toLowerCase()]: parseFloat(data.lprice),
            };
          });
        });
    };

    fetchSingleCrypto("ETH");
    fetchSingleCrypto("AVAX");
    fetchSingleCrypto("SOL");
    fetchSingleCrypto("MANA");
    fetchSingleCrypto("CAKE");
    fetchSingleCrypto("ADA");
  }, []);

  const priceInDollar = (crypto, amount) => {
    const price = cryptoPrices[crypto.toLowerCase()] * amount;
    return (price.toFixed(4) * 1).toLocaleString();
  };

  const contextValue = useMemo(
    () => ({
      cryptocurrencies,
      setCryptocurrencies,
      isLoading,
      cryptoPrices,
      priceInDollar,
    }),
    //FIXME:TO MANY RENDERS
    [cryptocurrencies, setCryptocurrencies, isLoading, cryptoPrices]
  );

  return (
    <CryptocurrenciesContext.Provider value={contextValue}>
      {children}
    </CryptocurrenciesContext.Provider>
  );
};

export default CryptocurrenciesContextProvider;
