import { useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import { Layout } from "./components/layout";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-7NN26FCWCX");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return <Layout />;
}

export default App;
