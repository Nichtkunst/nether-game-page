import * as React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme as customTheme } from "@chakra-ui/core";

const App = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {props.children}
    </ThemeProvider>
  );
};

export default App;
