import React from "react";
import {
  Stack,
  Avatar,
  PseudoBox,
  Divider,
  Image,
  Flex,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from "@chakra-ui/core";

import { getRandomImage } from "../helper";
import char_orc from "../assets/char_orc.png";
import char_sorcerer from "../assets/char_sorcerer.png";
import char_soldier from "../assets/char_soldier.png";

const random_images_array = [char_orc, char_sorcerer, char_soldier];

const PlayerCard = (props: { player: any }) => {
  const { player, ...restProps } = props;
  // const [show, setShow] = React.useState(false);
  // const handleToggle = () => setShow(!show);

  console.log(
    "getRandomImage(random_images_array)",
    getRandomImage(random_images_array)
  );
  return (
    <PseudoBox
      p={5}
      rounded="md"
      shadow="md"
      borderWidth="1px"
      marginTop={4}
      _hover={{ bg: "gray.100" }}
      {...restProps}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <Flex justify="center">
          <Image
            height="350px"
            fallbackSrc="https://via.placeholder.com/150"
            src={getRandomImage(random_images_array)}
            alt={getRandomImage(random_images_array)}
          />
        </Flex>
        <Flex>
          <Divider orientation="vertical" mr={6} />
          <Stack spacing={2}>
            <Avatar
              size="sm"
              name={player[1].Name.substring(0).toUpperCase()}
            />
            <Stat>
              <StatLabel>Name &bull; {player[1].Name}</StatLabel>
              <StatNumber>{player[1].Rank}</StatNumber>
              <StatHelpText>Arena &bull; {player[1].Arena}</StatHelpText>
            </Stat>
          </Stack>
        </Flex>
      </Grid>
    </PseudoBox>
  );
};

export default PlayerCard;
