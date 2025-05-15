import { ProjectCategory } from "@/components/projectCategory";
import { ProjectsListPage } from "@/components/projectList";
import React from "react";

export const ProjectsComponents = ({ title, subTitle, slogan, images }) => {
  return (
    <div>
      <div className="flex justify-between w-full items-start mt-20">
        <div className="flex flex-col ml-30 ">
          <p className="text-[60px] font-[Neogrotesk-AltBold] tracking-[0.1em]">
            {title}
          </p>
          <p className="text-[13px] font-[Neogrotesk-AltBold] tracking-[0.3em]">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col items-end text-right max-w-[60vh] mr-30 leading-relaxed break-words text-[18px] font-[BeauSans]">
          <div>
            {slogan}
            <br /> -- <br /> Feel free to contact me via Email, Phone number, or
            Instagram.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <ProjectCategory></ProjectCategory>
        <ProjectsListPage images={images}></ProjectsListPage>
      </div>
    </div>
  );
};
