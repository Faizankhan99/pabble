/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Heading, Input, useToast } from "@chakra-ui/react";
import style from "./css.module.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, logoutFunc } from "../../../Store/auth.action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);
  const { signupData, loading, error } = useSelector((store) => store.auth);
  console.log("signupData", signupData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  // ----------------- (Navigate) --------------
  useEffect(() => {
    if (signupData) {
      // ------------ Alert----------
      toast({
        title: signupData.message,
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      if (signupData.status === true) {
        navigate("/login");
        dispatch(logoutFunc());
      }
    }
  }, [signupData]);

  // ---------- ( onChange function ) ---------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // --------- ( onSubmit function ) ----------
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  return (
    <div className={style.main}>
      <div className={style.signup}>
        {/* -------------- ( Api Error ) --------------- */}
        {error ? <Heading color="red">Server error...</Heading> : ""}

        <h1>Sign up</h1>
        {/* --------- ( Sign up Form ) --------- */}
        <form className={style.form} onSubmit={handleSubmit}>
          <Input
            name="name"
            onChange={handleChange}
            value={form.name}
            required
            bg="#ffff"
            placeholder="Name"
          />
          <Input
            name="email"
            onChange={handleChange}
            value={form.email}
            required
            bg="#ffff"
            placeholder="Email"
            type="email"
          />
          <Input
            name="password"
            onChange={handleChange}
            value={form.password}
            required
            bg="#ffff"
            placeholder="Password"
            type="password"
          />
          <Button type="submit">{loading ? "loading..." : "Sign up"}</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
