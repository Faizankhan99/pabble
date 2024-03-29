import { Box, Divider, Image, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftList from "./List";

export default function LeftMain() {
  const navigate = useNavigate();
  return (
    <Box w="90%" m="auto">
      <Box
        display="flex"
        gap="14px"
        mt="30%"
        onClick={() => navigate("/")}
        cursor="pointer"
      >
        <Avatar
          mt={["4%", "4%", "6%"]}
          w={["20%", "15%", "20%"]}
          h={["30px", "40px", "56px"]}
          name="Faizan Khan"
        />
        <Box mt="3%">
          <Text
            fontSize={["12px", "15px", "24px"]}
            fontWeight="medium"
            color="white"
          >
            Faizan Khan
          </Text>
          <Text
            fontSize={["12px", "15px", "15px"]}
            fontWeight="hairline"
            color="lightcyan"
          >
            Software Developer
          </Text>
        </Box>
      </Box>
      <Divider mt="10%" />
      <LeftList />
    </Box>
  );
}
