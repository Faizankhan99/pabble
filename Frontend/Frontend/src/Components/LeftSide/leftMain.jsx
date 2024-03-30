import { Box, Divider, Image, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftList from "./List";

export default function LeftMain() {
  const navigate = useNavigate();
  const Name = JSON.parse(localStorage.getItem("user")); // for getting name from localStorage

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
          name={Name}
        />
        <Box mt="3%">
          <Text
            fontSize={["12px", "15px", "24px"]}
            fontWeight="medium"
            color="white"
          >
            {Name}
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
