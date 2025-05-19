import React from "react";
import { AppHeader } from "./Header";
import { AppFooter } from "./footer";
import { AppBody } from "./body";
import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="site">
        <AppHeader />
        <div className="pt-[22vh]"> {/* Push content down by header height */}
          <AppBody />
          <AppFooter />
        </div>
      </div>
    </AnimatePresence>
  );
};
