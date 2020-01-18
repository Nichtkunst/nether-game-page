import React from "react";
import { Box, Stack, Heading, Text, Avatar } from "@chakra-ui/core";

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

interface RankingList {
  path: string;
  ids: string[];
  value: any;
}

const PlayerCardList = (props: { data: RankingList }) => {
  const { data, ...restProps } = props;
  // const { value, path, ids } = data;
  const rankingList = Object.entries(data.value[0]);
  console.log("rankingList", rankingList);
  return rankingList.map((player: any) => (
    <PlayerCard player={player} {...restProps} />
  ));
};

export default PlayerCardList;
