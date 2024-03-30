import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Popup } from "./AddTaskModel";

export default function AddTask({ setReloadData, reloadData }) {
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
      {/*---------------  ADD TASK MODAL OPEN AND CONDTION TRUE -----------------------*/}
      <Popup
        isOpen={isOpen}
        setIsopen={setIsopen}
        setReloadData={setReloadData}
        reloadData={reloadData}
      />
    </Box>
  );
}
