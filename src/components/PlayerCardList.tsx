import { uniqueId } from "lodash";
import React from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Stack,
  Heading,
  Text,
  Badge,
  Grid,
  Spinner,
  Avatar,
  CircularProgress
} from "@chakra-ui/core";

interface BestPlayer {
  Name: string;
  1: { Name: string; Arena: string; Rank: string };
}

const s = (a: any) => JSON.stringify(a);

const PlayerCard = (props: { player: any }) => {
  const { player, ...restProps } = props;
  return (
    <Box
      p={5}
      rounded="md"
      shadow="md"
      borderWidth="1px"
      marginTop={4}
      {...restProps}
    >
      <Stack isInline align="center" spacing={8}>
        <Heading as="h2" size="md">
          {player[1].Rank}
        </Heading>
        <Avatar size="sm" name={player[1].Name.substring(0).toUpperCase()} />
        <Heading fontSize="xl">{player[1].Name}</Heading>
        <Text mt={2}>Arena: {player[1].Arena}</Text>
      </Stack>
    </Box>
  );
};

const PlayerCardList = (props: { value: [0] }) => {
  const { value, ...restProps } = props;
  const rankingList = Object.entries(value[0]);
  return rankingList.map((player: any) => (
    <PlayerCard player={player} {...restProps} />
  ));
};

export default PlayerCardList;
