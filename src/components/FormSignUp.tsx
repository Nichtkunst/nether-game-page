import * as React from "react";
import { PseudoBox, Flex } from "@chakra-ui/core";

const FormSignUp = () => {
  return (
    <Flex p={4} as="form" color="gray.700">
      <PseudoBox
        as="input"
        placeholder="Your email"
        // @ts-ignore
        type="email"
        flex="1"
        py={2}
        px={4}
        rounded="sm"
        bg="gray.100"
        borderWidth="1px"
        _hover={{ borderColor: "gray.200", bg: "gray.200" }}
        _focus={{
          outline: "none",
          bg: "white",
          boxShadow: "outline",
          borderColor: "gray.300"
        }}
      />
      <PseudoBox
        as="button"
        bg="teal.500"
        py={2}
        px={4}
        ml={3}
        rounded="md"
        fontWeight="semibold"
        color="white"
        _hover={{ bg: "teal.600" }}
        _focus={{ boxShadow: "outline" }}
      >
        Sign Up
      </PseudoBox>
    </Flex>
  );
};

export default FormSignUp;
