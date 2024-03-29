import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

export default function Todo() {
  let item = [
    {
      Number: "200",
      text: "Total Tasks",
      id_: "1",
    },
    {
      Number: "100",
      text: "Pending Tasks",
      id_: "2",
    },
    {
      Number: "100",
      text: "Completed Tasks",
      id_: "5",
    },
  ];

  return (
    <div>
      <SimpleGrid
        columns={["1", "1", "1", "2", "3"]}
        spacing={10}
        mt={["20%", "20%", "7%"]}
      >
        {item.map((elem, i) => (
          <>
            <Box
              display="flex"
              gap="20px"
              key={elem.id_}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              borderRadius="13px"
              p="20px"
            >
              <Box
                bg="#E3F0EF"
                h={["75px", "70px", "95px"]}
                w={["90px", "100px", "80px"]}
                borderRadius="13px"
              >
                <Box
                  ml={["10px", "15px", "12px"]}
                  mt={["5px", "12px", "15px"]}
                  p="10px"
                  fontSize="40px"
                >
                  <AiOutlineUser color="#00A54F" />
                </Box>
              </Box>
              <Box>
                <Text
                  fontSize={["17px", "20px", "23px"]}
                  fontWeight="bold"
                  color="#00A54F"
                >
                  {elem.Number}
                </Text>
                <Text fontSize={["9px", "10px", "16px"]}>{elem.text}</Text>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </div>
  );
}
