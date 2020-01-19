import * as React from "react";
import { PseudoBox, Image } from "@chakra-ui/core";

const BoxChar = (props: {
  charName?: string;
  description?: string;
  img: string;
  alt: string;
}) => {
  return (
    <PseudoBox
      p={5}
      rounded="md"
      shadow="md"
      borderWidth="1px"
      role="group"
      maxW="sm"
      overflow="hidden"
      cursor="pointer"
      bg="white"
      boxShadow="md"
      // @ts-ignore
      _hover={{ bg: "gray.100" }}
    >
      <PseudoBox
        fontWeight="semibold"
        fontSize="lg"
        mb={1}
        color="gray.900"
        // _groupHover={{ color: "gray.900" }}
      >
        {props.charName}
      </PseudoBox>
      <Image
        height="350px"
        fallbackSrc="https://via.placeholder.com/150"
        p={3}
        src={props.img}
        alt={props.alt}
      />
      <PseudoBox
        mx="auto"
        color="gray.700"
        mb={2}
        // _groupHover={{ color: "gray.900" }}
      >
        {props.description}
      </PseudoBox>
    </PseudoBox>
  );
};

export default BoxChar;
