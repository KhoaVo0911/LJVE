import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home/index.jsx";
import { AboutPage } from "@/pages/about/index.jsx";
import { JournalPage } from "@/pages/journal/index.jsx";
import { ProjectsPage } from "@/pages/projects/index.jsx";
import routes from "@/hooks/routes";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { DocumentaryPage } from "@/pages/projects/documentary";
import { MusicVideoPage } from "@/pages/projects/musicVideo";
import { OriginalPage } from "@/pages/projects/original";
import { ShortFilmPage } from "@/pages/projects/shortFilm";
import { CommercialPage } from "@/pages/projects/commercial";
import { AllProjectsPage } from "@/pages/projects/allProject";

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
        children: [
          {
            path: routes.allProjects,
            element: <AllProjectsPage />,
          },
          {
            path: routes.documentary,
            element: <DocumentaryPage />,
          },
          {
            path: routes.musicVideo,
            element: <MusicVideoPage />,
          },
          {
            path: routes.original,
            element: <OriginalPage />,
          },
          {
            path: routes.shortFilm,
            element: <ShortFilmPage />,
          },
          {
            path: routes.commercial,
            element: <CommercialPage />,
          },
        ],
      },
    ],
  },
]);

