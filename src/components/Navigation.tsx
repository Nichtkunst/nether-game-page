import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/core";

import * as ROUTES from "../routes";

const Navigation = () => (
  <Flex p={3} bg="teal" alignItems="center">
    <Button variantColor="teal" size="lg" variant="ghost">
      <Link to={ROUTES.LANDING}>Landing Page</Link>
    </Button>
    <Box mx="auto" />
    <Button variantColor="teal" size="lg">
      <Link to={ROUTES.RANKING}>Ranking</Link>
    </Button>
    <Box mx="auto" />
    <Button variantColor="teal" size="lg" variant="ghost">
      <Link to={ROUTES.HOME}>Home</Link>
    </Button>
  </Flex>
);

export default Navigation;
