import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/core";

import * as ROUTES from "../routes";

const Navigation = () => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Link to={ROUTES.LANDING}>Landing Page</Link>
    <Box mx="auto" />
    <Link to={ROUTES.HOME}>Home</Link>
    <Link to={ROUTES.BEST_PLAYERS}>Best Players</Link>
  </Flex>
);

export default Navigation;
