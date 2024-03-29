import {
  failed,
  loading,
  login_success,
  logout,
  signup_success,
} from "./auth.type";
import axios from "axios";

export const signupUser = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.post("http://localhost:8080/user/signup", {
      name: form.name,
      email: form.email,
      password: form.password,
    });
    dispatch({ type: signup_success, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

export const LoginApi = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.post("http://localhost:8080/user/login", {
      email: form.email,
      password: form.password,
    });
    dispatch({ type: login_success, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (Log out) ----------------
export const logoutFunc = () => ({ type: logout });
