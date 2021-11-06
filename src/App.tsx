import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { store } from "~/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
