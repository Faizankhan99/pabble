/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import React from "react";
import LeftMain from "../LeftSide/leftMain";
import Complete from "./complete";

export default function CompleteTask() {
  return (
    <Box>
      <Box display="flex" h="1000px">
        <Box w={["40%", "30%", "20%"]} bg="#00A54F">
          <LeftMain />
        </Box>
        <Box w={["60%", "30%", "80%"]} padding="2%">
          <Complete />
        </Box>
      </Box>
    </Box>
  );
}
