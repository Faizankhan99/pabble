import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
const DetailTask = ({ isOpen, setIsOpen, editData }) => {
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="4" bg="#f3f7fd" mt="40" w="50%">
          <ModalHeader>Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="30px">Complete all the Task</Text>
            <Select>
              <option value="">pending</option>
              <option value="">Done</option>
              <option value="">backlog</option>
            </Select>
            <Button mt="8" w="100%" bg="teal">
              Edit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailTask;
