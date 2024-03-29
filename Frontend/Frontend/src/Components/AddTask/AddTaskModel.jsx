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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AddTask, GetTask } from "../../Utils";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const initial = {
  task: "",
  storyPoint: "",
  duration: "",
};
export function Popup({ isOpen, setIsopen }) {
  const [text, setText] = useState(initial);
  const [useData, setUserData] = useState({});
  const { loginData } = useSelector((store) => store.auth);

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      setUserData(jwtDecode(loginData.token));
    }
  }, [loginData]);

  console.log("userData", useData);

  function handlechange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }

  function onClose() {
    setIsopen(false);
  }

  function Submitdata(e) {
    e.preventDefault();
    GetTask(useData.id);

    // AddTask(text, useData.id)
    //   .then((res) => {
    //     console.log(res);
    //     GetTask(useData.id);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    // onClose();
  }

  //   useEffect(() => {
  //   }, [text]);

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
                <FormLabel ml="3px">Title</FormLabel>
                <Input
                  placeholder="Enter Title"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="task"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Story Point</FormLabel>
                <Input
                  placeholder="Enter Story No.."
                  borderBottom="1px solid black"
                  value={text.value}
                  name="storyPoint"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Duration for complete</FormLabel>
                <Input
                  placeholder="Enter Duration"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="duration"
                  onChange={handlechange}
                />
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
