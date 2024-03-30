import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  FormLabel,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AddTask, GetTask } from "../../Utils";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const initial = {
  task: "",
  description: "",
  duration: "",
};
export function Popup({ isOpen, setIsopen, setReloadData, reloadData }) {
  const [text, setText] = useState(initial);
  const [useData, setUserData] = useState({});
  const { loginData } = useSelector((store) => store.auth);
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      setUserData(jwtDecode(loginData.token));
    }
  }, [loginData]);

  console.log("userData", useData);

  //  -------------------------------(HANDLE ONCHANGE FUNCTION)---------------------------------
  function handlechange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }

  function onClose() {
    setIsopen(false);
  }

  //  -------------------------------(HANDLE SUBMIT FORM FUNCTION)---------------------------------
  function Submitdata(e) {
    e.preventDefault();
    AddTask(text, useData.id)
      .then((res) => {
        console.log(res);
        if (res) {
          toast({
            title: "Task Addedd Successfully",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setReloadData(!reloadData);
          setIsopen(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD Task </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box gap="20px">
              <form action="" onSubmit={Submitdata}>
                {/*  //  -------------------------------(TITLE INPUT)-------------------- */}
                <FormLabel ml="3px">Title</FormLabel>
                <Input
                  placeholder="Enter Title"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="task"
                  onChange={handlechange}
                />
                {/*  //  -------------------------------(DESCRIPTION INPUT)-------------------- */}

                <FormLabel ml="3px">Story Description</FormLabel>
                <Textarea
                  placeholder="Enter description of task."
                  borderBottom="1px solid black"
                  value={text.value}
                  name="description"
                  onChange={handlechange}
                />
                {/*  //  -------------------------------(DURATION INPUT)-------------------- */}

                <FormLabel ml="3px">Duration for complete</FormLabel>
                <Input
                  placeholder="Enter Duration"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="duration"
                  onChange={handlechange}
                />
                {/*  //  -------------------------------(SUBMIT BUTTON)-------------------- */}

                <Input
                  type="submit"
                  mt="5%"
                  //   ml="30%"
                  bg="red"
                />
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
