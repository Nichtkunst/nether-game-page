import * as React from "react";
import { ThemeProvider, CSSReset, theme as customTheme } from "@chakra-ui/core";
// import { customTheme } from "../theme";

const App = (props: { children: React.ReactNode }) => {
  return (
    // @ts-ignore
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {props.children}
    </ThemeProvider>
  );
};
//  <ColorModeProvider>
export default App;
