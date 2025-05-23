import { ProjectCategory } from "@/components/projectCategory";
import { ProjectsListPage } from "@/components/projectList";
import React from "react";

export const ProjectsComponents = ({ title, subTitle, slogan, images }) => {
  return (
    <div className="w-full sm:px-4 md:px-10 lg:px-30">
      <div className="flex flex-col md:flex-row justify-between w-full items-start mt-10 md:mt-20 gap-6 md:gap-0">
        <div className="flex flex-col md:ml-30 w-full">
          <p className="text-2xl sm:text-4xl md:text-[60px] font-[Neogrotesk-AltBold] font-bold tracking-[0.1em] text-center md:text-left mb-2">
            {title}
          </p>
          <p className="text-[13px] font-[Neogrotesk-AltBold] tracking-[0.3em] break-words">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col items-end text-right max-w-[60vh] mr-30 text-[18px] font-[BeauSans] break-words whitespace-normal">
          {slogan}
          <br /> -- <br /> Feel free to contact me via Email, Phone number, or
          Instagram.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
        <ProjectCategory />
        <ProjectsListPage images={images} />
      </div>
    </div>
  );
};
