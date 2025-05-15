import routes from "@/hooks/routes";
import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { JournalPage } from "@/pages/journal";
import { ProjectsPage } from "@/pages/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmDetails from "@/components/filmdetails";

export const AppBody = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<HomePage />} />
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.journals} element={<JournalPage />} />
      <Route path={`${routes.projects}/*`} element={<ProjectsPage />} />
      <Route path="/film/:id" element={<FilmDetails />} />
    </Routes>
  );
};
