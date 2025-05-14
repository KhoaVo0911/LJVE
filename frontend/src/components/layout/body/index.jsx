import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { JournalPage } from "@/pages/journal";
import { ProjectsPage } from "@/pages/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const AppBody = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/journals" element={<JournalPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};
