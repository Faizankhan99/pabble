import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Popup } from "./AddTaskModel";

export default function AddTask() {
  const [isOpen, setIsopen] = useState(false);
  const [text, setText] = useState("");

  function handlechange(e) {
    setText(e.target.value);
  }

  function onClickbutton() {
    setIsopen(true);
  }

  return (
    <Box>
      <Box w="100%" display="flex" gap="20px">
        <Button
          onClick={onClickbutton}
          bg="#00A54F"
          w={["50px", "200px", "100px"]}
          fontSize={["8px", "8px", "md"]}
        >
          + Add New
        </Button>
      </Box>
      <Popup isOpen={isOpen} setIsopen={setIsopen} />
      {/* <ListItem query={query} /> */}
    </Box>
  );
}
