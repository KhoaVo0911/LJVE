import React from "react";
import { NavigationBar } from "./navigation";
import { InformationIcon } from "../information";

export const AppHeader = () => {
  return (
    <header className="bg-black text-white px-6 py-4 font-[gilroy] relative">
      <div className="flex justify-between items-start">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-4 text-[96px] font-bold leading-none tracking-[11px]">
          LJVE
        </div>

        <div className="mt-8 ml-auto mr-20 flex space-x-7 ">
          <InformationIcon />
        </div>
      </div>

      <div className="mt-[40px] flex justify-center">
        <NavigationBar />
      </div>
    </header>
  );
};
