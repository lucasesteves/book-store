import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Title } from "~/components";
import customRender from "~/config/customRender";

describe("Title component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(customRender(<Title>Text</Title>)).toBeDefined();
  });
});
