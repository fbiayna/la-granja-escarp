import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import dayjs from "dayjs";
import { HelmetProvider } from "react-helmet-async";
import Home from "../presentation/screen/home";
import AppStateContext from "./context/app-state.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

require("dayjs/locale/ca");
dayjs.locale("ca");

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <AppStateContext.Provider
          value={{
            isNotDesktop: window.innerWidth < 950,
            isMobile: window.innerWidth < 768,
          }}
        >
          <Home />
        </AppStateContext.Provider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
