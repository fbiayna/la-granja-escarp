import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import dayjs from "dayjs";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

require("dayjs/locale/ca");
dayjs.locale("ca");

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <h1>La Granja d'Escarp</h1>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
