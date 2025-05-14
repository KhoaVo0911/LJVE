import { createBrowserRouter } from "react-router-dom";
import { path } from "../constants/path";
import { HomePage } from "../pages/home/index.jsx";
import { AboutPage } from "../pages/about/index.jsx";
import { JournalPage } from "../pages/journal/index";
import { ProjectsPage } from "../pages/projects/index";
import { Layout } from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "journal", element: <JournalPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);
