import React from "react";
import "@testing-library/jest-dom";
import { Books } from "~/pages";
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
          <Books />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe("Edit Book page", () => {
  it("Should render correctly", () => {
    expect(customRender()).toBeDefined();
  });

  it("Should open modal detail", () => {
    customRender();

    fireEvent.click(screen.getByRole("button", { name: "Detail" }));
    expect(screen.getByTestId("modal-detail")).toBeVisible();
  });

  it("Should button click rent book", () => {
    customRender();

    fireEvent.click(screen.getByRole("button", { name: "Rent" }));
    expect(<Loading />).toBeDefined();
    timeout(() => {
      expect(screen.getByText("Give back")).toBeInTheDocument();
    });
  });
});
