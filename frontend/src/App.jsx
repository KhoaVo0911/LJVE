import { useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import { Layout } from "./components/layout";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-7NN26FCWCX"); // ← Replace with your real ID
    ReactGA.send("pageview");
  }, []);

  return <Layout></Layout>;
}

export default App;
