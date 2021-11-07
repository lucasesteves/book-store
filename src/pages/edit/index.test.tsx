import React from "react";
import "@testing-library/jest-dom";
import { Edit } from "~/pages";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import { render, screen, fireEvent } from "@testing-library/react";

const reduceMock = {
  dashboard: {
    books: [
      {
        id: "000-1asd",
        title: "Star Wars III",
        description: "Lorem Ipsum",
        status: "avaliable",
      },
    ],
    rentedBooks: [],
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
          <Edit />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe("Edit Book page", () => {
  it("Should render correctly", () => {
    expect(customRender()).toBeDefined();
  });

  it("Should open modal edit", () => {
    customRender();

    fireEvent.click(screen.getByRole("button", { name: "Edit" }));
    expect(screen.getByText("Edit Book")).toBeVisible();
  });

  it("Should open modal remove", () => {
    customRender();

    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(
      screen.getByText("Do you really want delete this book?")
    ).toBeVisible();
  });

  it("Should open modal add", () => {
    customRender();

    fireEvent.click(screen.getByTestId("addBook"));
    expect(screen.getByText("Add Book")).toBeVisible();
  });
});
