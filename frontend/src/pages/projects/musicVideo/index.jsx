import { ProjectsComponents } from "@/components/project";
import { listProjects } from "@/hooks/mockData";
import React from "react";

export const MusicVideoPage = () => {
  const allProject = listProjects[2];

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
