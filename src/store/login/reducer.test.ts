import { AnyAction } from "redux";
import reducer from "./reducer";
import { loginTypes, LoginState } from "./types";
import mockBooks from "~/mocks/data.json";

describe("Dashboard reducer", () => {
  const INITIAL_STATE: LoginState = {
    name: "",
    loading: false,
  };

  it("should return INITIAL_STATE", () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(INITIAL_STATE);
  });

  it("should handle LOADING_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: loginTypes.LOADING_REQUEST,
      })
    ).toEqual({
      name: "",
      loading: true,
    });
  });

  it("should handle AUTH_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: loginTypes.AUTH_REQUEST,
        payload: "John",
      })
    ).toEqual({
      name: "John",
      loading: false,
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: loginTypes.LOGOUT_REQUEST,
      })
    ).toEqual({
      name: "",
      loading: false,
    });
  });
});
