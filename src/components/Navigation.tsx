import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BestPlayersPage from "../pages/BestPlayersPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import * as ROUTES from "../routes";

const Navigation = () => (
  <Tabs>
    <Router>
      <TabList>
        <Tab>
          <Link to={ROUTES.LANDING}>Landing Page</Link>
        </Tab>
        <Tab>
          <Link to={ROUTES.HOME}>Home</Link>
        </Tab>
        <Tab>
          <Link to={ROUTES.BEST_PLAYERS}>Best Players</Link>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </TabPanel>
        <TabPanel>
          <Route path={ROUTES.HOME} component={HomePage} />
        </TabPanel>
        <TabPanel>
          <Route path={ROUTES.BEST_PLAYERS} component={BestPlayersPage} />
        </TabPanel>
      </TabPanels>
    </Router>
  </Tabs>
);

export default Navigation;
