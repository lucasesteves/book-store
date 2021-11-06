import React from "react";
import "@testing-library/jest-dom";
import { Edit } from "~/pages";
import customRender from "~/config/customRender";

describe("Edit page", () => {
  it("Should render correctly", () => {
    expect(customRender(<Edit />)).toMatchSnapshot();
  });
});
