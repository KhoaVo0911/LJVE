import React from "react";
import { AboutMePage } from "../../components/aboutMe";
import { ServicePage } from "@/components/service";
import { IdiomPage } from "@/components/idiom";

export const AboutPage = () => {
  return (
    <div className="ml-30 mr-30 mt-10">
      <AboutMePage />
      <ServicePage />
      <IdiomPage />
    </div>
  );
};
