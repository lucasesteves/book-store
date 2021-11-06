import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { Button } from "~/components";
import customRender from "~/config/customRender";

describe("Button component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(
      customRender(<Button onClick={jest.fn()}>Button</Button>)
    ).toBeDefined();
  });

  it("button vartiant outline", async () => {
    const { container } = customRender(
      <Button variant="outline" color="primary" onClick={jest.fn()}>
        Button
      </Button>
    );

    expect(container.firstChild).toHaveStyle("border:1px solid #55854e");
  });
});
