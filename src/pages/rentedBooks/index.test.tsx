import React from "react";
import "@testing-library/jest-dom";
import { RentedBooks } from "~/pages";
import customRender from "~/config/customRender";

describe("Books page", () => {
  it("Should render correctly", () => {
    expect(customRender(<RentedBooks />)).toMatchSnapshot();
  });
});
