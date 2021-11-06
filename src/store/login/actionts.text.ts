import { loginTypes } from "./types";
import { loadingRequest, loginRequest, logoutRequest } from "./actions";

describe("Dashboard actions", () => {
  it("loadingRequest", () => {
    expect(loadingRequest()).toEqual({
      type: loginTypes.LOADING_REQUEST,
    });
  });

  it("loginRequest", () => {
    const payload = "John";
    expect(loginRequest(payload)).toEqual({
      type: loginTypes.AUTH_REQUEST,
      payload,
    });
  });

  it("logoutRequest", () => {
    expect(logoutRequest()).toEqual({
      type: loginTypes.LOGOUT_REQUEST,
    });
  });
});
