import { uniqueId } from "lodash";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";
import {
  Box,
  Stack,
  Heading,
  Text,
  Badge,
  Grid,
  Avatar,
  CircularProgress
} from "@chakra-ui/core";
import firebaseConfig from "../firebaseConfig";

const s = (a: any) => JSON.stringify(a);

/* db.collection('ArenaTop').doc('List').get().then(query => {

  const list = query.data();
  for(let ind in list) {
      //blablabla
  }
} */

const BestPlayersPage = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} padding={4}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <BestPlayersList />
      </FirestoreProvider>
    </Grid>
  );
};

const PlayerCardList = ({ value, ...rest }) => {
  const list = Object.entries(value[0]);
  const listNew = list.map(list => list[1]);
  console.log("list", listNew[0].Name);
  return list.map(listNew => (
    <Box
      p={5}
      borderRadius={4}
      shadow="md"
      borderWidth="1px"
      marginTop={4}
      key={uniqueId(listNew.Name)}
      {...rest}
    >
      <Avatar name="Some Player" src="https://bit.ly/dan-abramov" />
      <Heading fontSize="xl">{listNew[1].Name}</Heading>
      <Text mt={2}>Arena: {listNew[1].Arena}</Text>
      <Badge variantColor="green">Rang {listNew[1].Rank}</Badge>
    </Box>
  ));
};

const BestPlayersList = ({ ...rest }) => (
  <Stack spacing={8}>
    <FirestoreCollection path={"ArenaTop"} doc={"List"} orderByKey>
      {d => {
        return d.isLoading ? (
          <CircularProgress />
        ) : (
          <PlayerCardList value={d.value} />
        );
      }}
    </FirestoreCollection>
  </Stack>
);

// <PlayerCard ids={ids} value={value} />

export default BestPlayersPage;
