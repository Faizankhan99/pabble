import React from "react";
import style from "./All.module.css";
import { List, ListItem, Box, Text } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineSafety } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Links = [
  {
    id: 1,
    Icon: AiOutlineHome,
    text: "DashBoard",
    path: "/dashboard",
  },
  {
    id: 2,
    Icon: AiOutlineSafety,
    text: "Completed",
    path: "/complete",
  },
  {
    id: 3,
    Icon: BsTelephone,
    text: "TO DO",
    path: "/todo",
  },
];

export default function LeftList() {
  const navigate = useNavigate();

  return (
    <Box mt="10%">
      <List spacing={6} ml="4%" cursor="pointer">
        {Links?.map((elem) => (
          <ListItem
            key={elem.id}
            onClick={() => navigate(elem.path)}
            display="flex"
            gap="4%"
            className={style.list}
          >
            <elem.Icon fontSize="30px" />
            <Text fontSize={["20px", "20px", "20px"]}>{elem.text}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
