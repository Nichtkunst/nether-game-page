import * as React from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/core";

const ModalAccount = (props: { isOpen: any; onClose: any }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Fight your way through dungeons of wack madness against bosses that
            will haunt you in your dreams.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAccount;
