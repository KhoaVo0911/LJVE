import React from "react";
import { InformationIcon } from "../information";
import ActiveUsersDisplay from "./activeUsersDisplay";

export const AppFooter = () => {
  return (
    <div className="mt-[40px] flex flex-row justify-center gap-4 mb-[25px]">
      <InformationIcon direction="row" gap="gap-4" />
      <ActiveUsersDisplay />
    </div>
  );
};