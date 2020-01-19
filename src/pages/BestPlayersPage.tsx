import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";
import { Flex, Stack, Spinner, Grid } from "@chakra-ui/core";
import firebaseConfig from "../firebaseConfig";
import PlayerCardList from "../components/PlayerCardList";

const BestPlayersPage = (props: any) => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6} padding={4} {...props}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <Stack spacing={8}>
          <BestPlayersList />
        </Stack>
      </FirestoreProvider>
    </Grid>
  );
};

const BestPlayersList = (props: any) => {
  const { ...restProps } = props;
  return (
    <FirestoreCollection path={"ArenaTop"} {...restProps}>
      {data => {
        return data.isLoading ? (
          <Flex py={3}>
            <Spinner mx="auto" />
          </Flex>
        ) : (
          // @ts-ignore
          <PlayerCardList data={data} />
        );
      }}
    </FirestoreCollection>
  );
};

export default BestPlayersPage;
