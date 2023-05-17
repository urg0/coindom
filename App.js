import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "pages/Home";
import RootPage from "pages/Root";
import Cryptocurrencies from "pages/Cryptocurrencies";
import BuyCrypto from "pages/BuyCrypto";
import NFT from "pages/NFT";
import News from "pages/News";
import Login from "pages/Login";
import GiftPage from "pages/GiftPage";
import ExchangeRate from "pages/ExchangeRate";

import "./App.css";
import ShoppingCart from "pages/ShoppingCart";
import ComingSoon from "components/ComingSoon/ComingSoon";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />,
        /* children: [{ path: "/" }], */
      },
      { path: "/buy", element: <BuyCrypto /> },
      { path: "/NFT", element: <NFT /> },
      { path: "/news", element: <News /> },
      { path: "/login", element: <Login /> },
      { path: "/GiftPage", element: <GiftPage /> },
      { path: "/ExchangeRate", element: <ExchangeRate /> },
      { path: "/shopping-cart", element: <ShoppingCart /> },
      { path: "/soon", element: <ComingSoon /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
