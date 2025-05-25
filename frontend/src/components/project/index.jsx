import { ProjectCategory } from "@/components/projectCategory";
import { ProjectsListPage } from "@/components/projectList";
import React from "react";

export const ProjectsComponents = ({ title, subTitle, slogan, images }) => {
  return (
    <div className="w-full sm:px-2 md:px-10 lg:px-30">
      <div className="flex flex-col md:flex-row justify-between w-full items-start mt-6 md:mt-20 gap-4 md:gap-0">
        <div className="flex flex-col w-full md:ml-30 text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-[60px] font-[Neogrotesk-AltBold] font-bold tracking-[0.1em] mb-1 md:mb-2 leading-tight md:leading-[1.1]">
            {title}
          </p>
          <p className="text-[11px] sm:text-[13px] font-[Neogrotesk-AltBold] tracking-[0.2em] md:tracking-[0.3em] break-words mb-2 md:mb-0">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-full md:max-w-[60vh] md:mr-30 text-[14px] sm:text-[16px] md:text-[18px] font-[BeauSans] break-words whitespace-normal mt-2 md:mt-0">
          {slogan}
          <br /> -- <br /> Feel free to contact me via Email, Phone number, or
          Instagram.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-20">
        <ProjectCategory />
        <ProjectsListPage images={images} />
      </div>
    </div>
  );
};
