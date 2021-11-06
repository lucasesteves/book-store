import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Loading } from "~/components";
import customRender from "~/config/customRender";

describe("Loading component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(customRender(<Loading />)).toBeDefined();
  });
});
