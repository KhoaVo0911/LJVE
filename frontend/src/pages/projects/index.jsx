import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { AllProjectsPage } from "./allProject";
import { DocumentaryPage } from "./documentary";
import { MusicVideoPage } from "./musicVideo";
import { OriginalPage } from "./original";
import { ShortFilmPage } from "./shortFilm";
import { CommercialPage } from "./commercial";
import routes from "@/hooks/routes";

export const ProjectsPage = () => {
  return (
    <>
      <Routes>
        <Route index element={<AllProjectsPage />} />
        <Route path={routes.allProjects} element={<AllProjectsPage />} />
        <Route path={routes.documentary} element={<DocumentaryPage />} />
        <Route path={routes.musicVideo} element={<MusicVideoPage />} />
        <Route path={routes.original} element={<OriginalPage />} />
        <Route path={routes.shortFilm} element={<ShortFilmPage />} />
        <Route path={routes.commercial} element={<CommercialPage />} />
      </Routes>
    </>
  );
};
