import React from "react";
import { InformationIcon } from "../information";
import { NavigationBar } from "./navigation";

export const AppHeader = () => {
  return (
    // <header className="bg-black text-white px-6 py-4 font-[gilroy] relative">
    <header className=" text-white px-6 py-4 font-[gilroy] relative z-10">
      <div className="flex justify-between items-start">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-4 text-[96px] font-bold leading-none tracking-[11px]">
          LJVE
        </div>

        <div className="mt-8 ml-auto mr-10 flex space-x-7 px-4 py-3 ">
          <InformationIcon />
        </div>
      </div>

      <div className="mt-[40px] flex justify-center">
        <NavigationBar />
      </div>
    </header>
  );
};
