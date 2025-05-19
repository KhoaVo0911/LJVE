import React from "react";
import { AppHeader } from "./header/index";
import { AppFooter } from "./footer/index";
import { AppBody } from "./body/index";

export const Layout = () => {
  return (
    <div className="site">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
};
