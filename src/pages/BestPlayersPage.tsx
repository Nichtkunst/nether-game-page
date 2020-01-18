import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";
import {
  Flex,
  Box,
  SimpleGrid,
  Stack,
  Spinner,
  Heading
} from "@chakra-ui/core";
import firebaseConfig from "../firebaseConfig";
import PlayerCardList from "../components/PlayerCardList";
import { uniqueId } from "lodash";

const BestPlayersPage = (props: any) => {
  return (
    <SimpleGrid p={3} columns={1} spacing={2} {...props}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <Stack spacing={8} {...props}>
          <BestPlayersList />
        </Stack>
      </FirestoreProvider>
    </SimpleGrid>
  );
};

const BestPlayersList = (props: any) => (
  <FirestoreCollection path={"ArenaTop"}>
    {data => {
      return data.isLoading ? (
        <Flex py={3}>
          <Spinner mx="auto" />
        </Flex>
      ) : (
        <>
          <Box p={5} rounded="md" shadow="md" borderWidth="1px" marginTop={4}>
            <Stack isInline align="center" spacing={8} {...props}>
              <Heading as="h2" size="md">
                Rank
              </Heading>
              <Heading as="h2" size="md">
                Player
              </Heading>
              <Heading as="h2" size="md">
                Nickname
              </Heading>
              <Heading as="h2" size="md">
                Arena
              </Heading>
            </Stack>
          </Box>
          // @ts-ignore
          <PlayerCardList value={data.value} />
        </>
      );
    }}
  </FirestoreCollection>
);

export default BestPlayersPage;
