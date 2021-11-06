import { createStore, Store } from "redux";
import { DashboardState } from "./dashboard/types";
import { LoginState } from "./login/types";
import rootReducer from "./rootReducer";
export interface ApplicationState {
  login: LoginState;
  dashboard: DashboardState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export { store };
