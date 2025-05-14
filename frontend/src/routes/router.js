import { createBrowserRouter } from "react-router-dom";
import routes from "@/hooks/routes";
import { HomePage } from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <HomePage />,
  },
  {
    path: routes.journals,
    element: <JournalListPage />,
  },
  {
    path: routes.journalDetail,
    element: <JournalDetailPage />,
  },
  {
    path: routes.about,
    element: <AboutPage />,
  },
  {
    path: routes.projects,
    element: <ProjectsPage />,
  },
]);
