import * as React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";
// @ts-ignore
import char_orc from "../assets/char_orc.png";

const AirBnbCard = (props: { player: any }) => {
  const { player, ...restProps } = props;
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      {...restProps}
    >
      <Image p="3" src={char_orc} alt={"brrr"} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            Rank {player[1].Rank}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {player[1].Name}
          </Box>
        </Box>

        <Box>
          Arena &bull;{" "}
          <Box as="span" color="gray.600" fontSize="sm">
            {player[1].Arena}
          </Box>
        </Box>

        {/*  &bull; {player[1].Name} baths <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {player[1].Rank} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default AirBnbCard;
