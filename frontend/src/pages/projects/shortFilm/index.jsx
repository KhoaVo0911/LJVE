import { ProjectsComponents } from "@/components/project";
import { listProjects } from "@/hooks/mockData";
import React from "react";

export const ShortFilmPage = () => {
  const allProject = listProjects[4];

  return (
    <>
      <ProjectsComponents
        title={allProject.title}
        subTitle={allProject.subTitle}
        slogan={allProject.slogan}
        images={allProject.images}
      ></ProjectsComponents>
    </>
  );
};
