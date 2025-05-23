import React from "react";
import { AboutMePage } from "../../components/aboutMe";
import { ServicePage } from "@/components/service";
import { IdiomPage } from "@/components/idiom";

export const AboutPage = () => {
  return (
    <div className="mt-10 mx-2 sm:mx-4 md:mx-10 lg:mx-30">
      <AboutMePage />
      <ServicePage />
      <IdiomPage />
    </div>
  );
};
