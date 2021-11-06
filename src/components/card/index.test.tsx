import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Card } from "~/components";
import customRender from "~/config/customRender";

describe("Card component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(
      customRender(
        <Card title="Title" description="description">
          action
        </Card>
      )
    ).toBeDefined();
  });
});
