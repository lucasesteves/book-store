import { action } from "typesafe-actions";
import { authTypes } from "./types";

export const loadingRequest = () => action(authTypes.LOADING_REQUEST);

export const loginRequest = (name: string) =>
  action(authTypes.AUTH_REQUEST, name);

export const logoutRequest = () => action(authTypes.LOGOUT_REQUEST);
