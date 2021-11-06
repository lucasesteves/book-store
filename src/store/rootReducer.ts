import { combineReducers } from "redux";
import { ActionType } from "typesafe-actions";
import login from "./login/reducer";
import dashboard from "./dashboard/reducer";

type ActionsUnion =
  | typeof import("./login/actions")
  | typeof import("./dashboard/actions");
declare type RootAction = ActionType<ActionsUnion>;
declare module "typesafe-actions" {
  // eslint-disable-next-line no-unused-vars
  interface Types {
    RootAction: RootAction;
  }
}

export default combineReducers({
  login,
  dashboard,
});
