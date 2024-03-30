/* eslint-disable no-debugger */
import { loading, login_success, logout, signup_success } from "./auth.type";

// ---------------------(Reducer initial state) --------------------
const initialState = {
  signupData: "",
  loginData: JSON.parse(localStorage.getItem("loginData")) || "",
  loginDataFail: "",
  loading: false,
  error: false,
};

//  -------------------(Auth Reducers) ---------------------------------------
export const authReducer = (state = initialState, { type, payload }) => {
  console.log("type", type, payload);
  switch (type) {
    case loading: {
      return { ...state, loading: true, error: false };
    }

    case signup_success: {
      console.log("hello");
      return {
        ...state,
        signupData: payload,
        loading: false,
        error: false,
      };
    }
    case login_success: {
      if (payload.status === true) {
        localStorage.setItem("loginData", JSON.stringify(payload));
        return { ...state, loading: false, error: false, loginData: payload };
      } else {
        return {
          ...state,
          loading: false,
          error: false,
          loginDataFail: payload,
        };
      }
    }
    case logout: {
      localStorage.clear("loginData");
      return {
        ...state,
        loading: false,
        error: false,
        loginData: "",
        signupData: "",
        loginDataFail: "",
      };
    }

    default: {
      return state;
    }
  }
};
