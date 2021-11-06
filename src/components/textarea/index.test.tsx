import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Textarea } from "~/components";
import customRender from "~/config/customRender";

describe("Textarea component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(
      customRender(
        <Textarea placeholder="Description" value="" onChange={jest.fn()} />
      )
    ).toBeDefined();
  });
});
