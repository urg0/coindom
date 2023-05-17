import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ChartContextProvider from "store/chart-store";
import ShoppingCartProvider from "store/shopping-card-store";
import NFTContextProvider from "store/nft-store";
import CryptocurrenciesContextProvider from "store/cryptocurrencies-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChartContextProvider>
    <ShoppingCartProvider>
      <NFTContextProvider>
        <CryptocurrenciesContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CryptocurrenciesContextProvider>
      </NFTContextProvider>
    </ShoppingCartProvider>
  </ChartContextProvider>
);
