import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import dayjs from "dayjs";
import { HelmetProvider } from "react-helmet-async";
import Home from "../presentation/screen/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

require("dayjs/locale/ca");
dayjs.locale("ca");

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Home />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
