import { ThemeProvider, createGlobalStyle } from "styled-components";

import Routes from "./Routes";
import theme from "./assets/theme";

const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
  }

  * {
    font-family: "IBM Plex Sans", sans-serif;
    box-sizing: border-box;

  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
