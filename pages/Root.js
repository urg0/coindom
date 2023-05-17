import React from "react";

import { Outlet } from "react-router-dom";

import MainNavigation from "components/RootPage/Navigation/MainNavigation";

import Lego from "components/RootPage/Lego/Lego";
import BottomNavigation from "components/RootPage/Navigation/BottomNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Lego />
      <BottomNavigation />
    </>
  );
};

export default RootPage;
