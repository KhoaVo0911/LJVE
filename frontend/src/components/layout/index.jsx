import React from "react";
import { AppHeader } from "./Header";
import { AppFooter } from "./footer";
import { AppBody } from "./body";

export const Layout = () => {
  return (
    <div class="site">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
};
