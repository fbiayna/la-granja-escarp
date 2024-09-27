import { createContext } from "react";
import AppState from "../../domain/entities/app-state";

const AppStateContext = createContext(new AppState(false, false));

export default AppStateContext;
