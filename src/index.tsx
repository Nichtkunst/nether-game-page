import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navigation from "./components/Navigation";

ReactDOM.render(
  <App>
    <Navigation />
  </App>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
