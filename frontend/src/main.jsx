import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-7NN26FCWCX");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
