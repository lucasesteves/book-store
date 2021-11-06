import { action } from "typesafe-actions";
import { loginTypes } from "./types";

export const loadingRequest = () => action(loginTypes.LOADING_REQUEST);

export const loginRequest = (name: string) =>
  action(loginTypes.AUTH_REQUEST, name);

export const logoutRequest = () => action(loginTypes.LOGOUT_REQUEST);
