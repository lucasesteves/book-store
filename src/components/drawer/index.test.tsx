import React from "react";
import "@testing-library/jest-dom";
import { cleanup, screen, fireEvent } from "@testing-library/react";
import { Drawer } from "~/components";
import customRender from "~/config/customRender";

describe("Drawer component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(customRender(<Drawer onClose={jest.fn()} />)).toBeDefined();
  });

  it("Should click menu buttons", () => {
    customRender(<Drawer onClose={jest.fn()} />);

    const books = fireEvent.click(
      screen.getByRole("button", { name: "Books" })
    );

    const edit = fireEvent.click(screen.getByRole("button", { name: "Books" }));

    const rent = fireEvent.click(screen.getByRole("button", { name: "Books" }));

    expect(books).toEqual(true);
    expect(edit).toEqual(true);
    expect(rent).toEqual(true);
  });
});
