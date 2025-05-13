import { createBrowserRouter } from "react-router-dom";
import routes from "../constants/routes";
import { LoginPage } from "../pages/login";
import RootRoute from "./RootRoute";
import PageNotFound from "../pages/error/404";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <RootRoute />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: routes.login,
        element: <LoginPage />,
      },
    ],
  },
]);
