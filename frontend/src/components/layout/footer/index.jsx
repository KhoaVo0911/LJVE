import React from "react";
import { InformationIcon } from "../information";
import { useLocation } from "react-router-dom";
// import ActiveUsersDisplay from "./activeUsersDisplay";

export const AppFooter = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  if (isHome) return null;
  return (
    <div className=" bottom-0 left-0 w-full flex flex-row justify-center gap-4 mb-[35px] z-50">
      <InformationIcon direction="row" gap="gap-4" />
      {/* <ActiveUsersDisplay /> */}
    </div>
  );
};
