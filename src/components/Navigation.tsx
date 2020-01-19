import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/core";

import * as ROUTES from "../routes";

const Navigation = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p={3} alignItems="center">
      <Button rounded="md" size="md" variant="outline">
        <Link to={ROUTES.HOME}>Home</Link>
      </Button>
      <Box mx="auto" />
      <Button rounded="md" size="md" variant="solid">
        <Link to={ROUTES.RANKING}>Ranking</Link>
      </Button>
      {/* <Box mx="auto" />
       <Button onClick={toggleColorMode} size="lg" variant="ghost">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
    </Flex>
  );
};

export default Navigation;
