import { Reducer } from "redux";
import { loginTypes, LoginState } from "./types";

const INITIAL_STATE: LoginState = {
  name: "",
  loading: false,
};

const reducer: Reducer<LoginState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case loginTypes.LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case loginTypes.AUTH_REQUEST:
      return {
        loading: false,
        name: payload,
      };
    case loginTypes.LOGOUT_REQUEST:
      return {
        loading: false,
        name: "",
      };
    default:
      return state;
  }
};

export default reducer;
