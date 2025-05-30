import { ProjectCategory } from "@/components/projectCategory";
import { ProjectsListPage } from "@/components/projectList";
import React from "react";

export const ProjectsComponents = ({ title, subTitle, slogan, images }) => {
  return (
    <div className="w-full md:px-10 px-5">
      <div className="flex flex-col md:flex-row justify-between w-full items-start mt-6 md:mt-20 gap-4 md:gap-0">
        <div className="flex flex-col w-full text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-[42px] font-[Neogrotesk-AltBold] font-bold tracking-[0.1em] mb-1 md:mb-2 leading-tight md:leading-[1.1]">
            {title}
          </p>
          <p className="text-[11px] sm:text-[11px] font-[Neogrotesk-AltBold] tracking-[0.2em] md:tracking-[0.3em] break-words mb-2 md:mb-0">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-full md:max-w-[70vh] text-[11px] sm:text-[16px] md:text-[16px] font-[BeauSans] whitespace-pre-line [overflow-wrap:normal] [word-break:normal] [hyphens:none]">
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
