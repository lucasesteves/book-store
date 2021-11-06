import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Input } from "~/components";
import customRender from "~/config/customRender";

describe("Input component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(
      customRender(
        <Input type="text" placeholder="input" value="" onChange={jest.fn()} />
      )
    ).toBeDefined();
  });
});
