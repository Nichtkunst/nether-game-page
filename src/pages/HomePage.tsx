import * as React from "react";
import { Grid, Box } from "@chakra-ui/core";

const HomePage = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} padding={4}>
      <Box w="100%" h="10" bg="blue.500">
        How it works!
      </Box>
      <Box w="100%" h="10" bg="blue.500">
        How it not works!
      </Box>
    </Grid>
  );
};

export default HomePage;
