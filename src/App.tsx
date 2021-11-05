import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
