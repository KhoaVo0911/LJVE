import React from "react";
import { AppHeader } from "./header/index";
import { AppFooter } from "./footer/index";
import { AppBody } from "./body/index";
import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="site">
        <AppHeader />
        <div className="pt-[22vh]"> 
          <AppBody />
          <AppFooter />
        </div>
      </div>
    </AnimatePresence>
  );
};
