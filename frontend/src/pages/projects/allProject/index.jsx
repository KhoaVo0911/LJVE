import { ProjectsComponents } from "@/components/project";
import { listProjects } from "@/hooks/mockData";
import React from "react";

export const AllProjectsPage = () => {
  const allProject = listProjects[0];

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
