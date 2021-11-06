import { Reducer } from "redux";
import { authTypes, LoginState } from "./types";

const INITIAL_STATE: LoginState = {
  name: "",
  loading: false,
};

const reducer: Reducer<LoginState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case authTypes.LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authTypes.AUTH_REQUEST:
      return {
        loading: false,
        name: payload,
      };
    case authTypes.LOGOUT_REQUEST:
      return {
        loading: false,
        name: "",
      };
    default:
      return state;
  }
};

export default reducer;
