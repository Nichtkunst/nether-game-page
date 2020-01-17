import * as React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme as customTheme } from "@chakra-ui/core";

const App = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

export default App;
