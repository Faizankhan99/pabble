import React from "react";
import { Link, json } from "react-router-dom";
import style from "./navbar.module.css";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logoutFunc } from "../../Store/auth.action";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const { loginData } = useSelector((store) => store.auth);
  const [useData, setUserData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      const userName = jwtDecode(loginData.token);
      setUserData(userName);
      localStorage.setItem("user", JSON.stringify(userName.name));
    }
  }, [loginData]);

  // --------------- (Log out) -------------------
  const handleLogout = () => {
    dispatch(logoutFunc());
    // ------------ Alert----------
    toast({
      title: "Log out Successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      dispatch(logoutFunc());
    }, 2);
    setUserData({});
  };

  return (
    <Box
      className={style.maindiv}
      pl={["2", "2", "10", "10"]}
      pr={["2", "2", "10", "10"]}
    >
      <Link to="/">
        <Image
          width={["40px", "40px", "90px", "90px"]}
          src="https://www.pabbly.com/wp-content/uploads/2020/08/Pabbly-Logo.svg"
          alt="Pabbly"
        />
      </Link>
      <SimpleGrid
        className={style.options}
        columns={4}
        gap={10}
        display={["none", "none", "flex", "flex"]}
      >
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>

        {/* ---------- (Conditional rendering) ------------*/}
        {loginData ? (
          <>
            <Button>Hi: {useData.name}</Button>
            <Button onClick={handleLogout}>Log out</Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Navbar;
