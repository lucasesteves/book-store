import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import { store } from "~/store";

export default (component: React.ReactElement, options?: RenderOptions) => {
  const Wrapper: any = ({ children }: { children: React.ReactChildren }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  );

  return render(component, { wrapper: Wrapper, ...options });
};
