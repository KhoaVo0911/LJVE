import { AboutPage } from "@/pages/about";
import { JournalPage } from "@/pages/journal";
import { HomePage } from "@/pages/home";
import React from "react";
import { Outlet } from "react-router-dom";

export const AppBody = () => {
  return (
    <>
      {/* <AboutPage></AboutPage> */}
      {/* <JournalPage></JournalPage> */}
      <HomePage></HomePage>
    </>
  );
};
