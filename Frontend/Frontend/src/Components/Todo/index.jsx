import { Box } from "@chakra-ui/react";
import React from "react";
import LeftMain from "../LeftSide/leftMain";
import Todo from "./Todo";

export default function TodoTask() {
  return (
    <Box>
      <Box display="flex" h="1000px">
        <Box w={["40%", "30%", "20%"]} bg="#00A54F">
          <LeftMain />
        </Box>
        <Box w={["60%", "30%", "80%"]} padding="2%">
          <Todo />
        </Box>
      </Box>
    </Box>
  );
}
