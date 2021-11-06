import React from "react";
import "@testing-library/jest-dom";
import { Books } from "~/pages";
import customRender from "~/config/customRender";

describe("Books page", () => {
  it("Should render correctly", () => {
    expect(customRender(<Books />)).toMatchSnapshot();
  });
});
