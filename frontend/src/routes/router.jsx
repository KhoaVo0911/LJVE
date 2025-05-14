import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home/index.jsx";
import { AboutPage } from "@/pages/about/index.jsx";
import { JournalPage } from "@/pages/journal/index.jsx";
import { ProjectsPage } from "@/pages/projects/index.jsx";
import routes from "@/hooks/routes";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Layout />} />
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.journals} element={<JournalPage />} />
      <Route path={routes.projects} element={<ProjectsPage />} />
    </Routes>
  );
};

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.about,
        element: <AboutPage />,
      },
      {
        path: routes.journals,
        element: <JournalPage />,
      },
      {
        path: routes.projects,
        element: <ProjectsPage />,
      },
    ],
  },
]);

export default AppRoutes;
