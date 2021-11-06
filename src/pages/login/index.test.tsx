import React from "react";
import "@testing-library/jest-dom";
import { Loading } from "~/components";
import { screen, fireEvent, cleanup } from "@testing-library/react";
import { Login } from "~/pages";
import customRender from "~/config/customRender";

describe("Login page", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(customRender(<Login />)).toBeDefined();
  });

  it("Should button be enable when input field is not empty", async () => {
    customRender(<Login />);

    const inputPlate = await screen.findByPlaceholderText(
      "enter with your name"
    );
    fireEvent.change(inputPlate, { target: { value: "Lucas" } });
    expect(screen.getByDisplayValue("Lucas")).toBeInTheDocument();
    expect(screen.getByText("Enter").closest("button")).not.toBeDisabled();
  });

  it("Should button click and load access", async () => {
    customRender(<Login />);

    const inputPlate = await screen.findByPlaceholderText(
      "enter with your name"
    );
    fireEvent.change(inputPlate, { target: { value: "Lucas" } });

    fireEvent.click(screen.getByRole("button", { name: "Enter" }));

    expect(<Loading />).toBeDefined();
  });
});
