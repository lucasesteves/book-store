import React from "react";
import "@testing-library/jest-dom";
import { RentedBooks } from "~/pages";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import { render, screen, fireEvent } from "@testing-library/react";
import { Loading } from "~/components";
import { timeout } from "~/utils";

const reduceMock = {
  dashboard: {
    books: [
      {
        id: "000-1asd",
        title: "Star Wars III",
        description: "Lorem Ipsum",
        status: "unavaliable",
      },
    ],
    rentedBooks: [
      {
        id: "000-1asd",
        title: "Star Wars III",
        description: "Lorem Ipsum",
        status: "unavaliable",
      },
    ],
    currentPage: "books",
    search: "",
    loading: false,
  },
};

const customRender = (reduce?: any) => {
  const storeMock = (state = reduceMock || reduce) => state;
  const store = createStore(storeMock);
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <MemoryRouter>
          <RentedBooks />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe("Books page", () => {
  it("Should render correctly", () => {
    expect(customRender()).toBeDefined();
  });

  it("Should one book be visible", () => {
    customRender(reduceMock);
    expect(screen.getByText("Give back")).toBeVisible();
  });

  it("Should give back book", async () => {
    customRender();

    fireEvent.click(screen.getByRole("button", { name: "Give back" }));
    expect(<Loading />).toBeDefined();
    timeout(() => {
      expect(
        screen.getByText("You don´t have books to show")
      ).toBeInTheDocument();
    });
  });
});
