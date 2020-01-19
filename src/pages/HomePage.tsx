import * as React from "react";
import {
  Grid,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  useDisclosure
} from "@chakra-ui/core";

import ModalAccount from "../components/ModalAccount";
import BoxChar from "../components/BoxChar";
import FormSignUp from "../components/FormSignUp";

import char_orc from "../assets/char_orc.png";
import char_sorcerer from "../assets/char_sorcerer.png";
import char_soldier from "../assets/char_soldier.png";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalAccount isOpen={isOpen} onClose={onClose} />
      <Stack>
        <Box p={4} color="gray.900">
          <Heading mb={4}>Choose a character</Heading>
          <Text fontSize="xl">
            Fight your way through dungeons of wack madness against bosses that
            will haunt you in your dreams
          </Text>
          <Button onClick={onOpen} size="lg" variantColor="green" mt="24px">
            Create a free account
          </Button>
        </Box>
        <Divider />
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
          <BoxChar
            charName={"Orc"}
            description={"Play the orc"}
            alt={"brrr"}
            img={char_orc}
          />
          <BoxChar
            charName={"Sorcerer"}
            description={"Play the sorcerer"}
            alt={"brrr"}
            img={char_sorcerer}
          />
          <BoxChar
            charName={"Soldier"}
            description={"Play the soldier"}
            alt={"brrr"}
            img={char_soldier}
          />
        </Grid>
      </Stack>
      <Divider />
      <FormSignUp />
    </>
  );
};

export default HomePage;
