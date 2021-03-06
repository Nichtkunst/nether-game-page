import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./app";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import BestPlayersPage from "./pages/BestPlayersPage";

import * as ROUTES from "./routes";

ReactDOM.render(
  <App>
    <Router>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.RANKING} component={BestPlayersPage} />
    </Router>
  </App>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
