/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  // -----------(Private Route IF Token Present Then Process Further Else NOt  )---------------
  const { loginData } = useSelector((store) => store.auth);
  return loginData.token ? children : <Navigate to="/login" />;
};

export default AuthRoute;
