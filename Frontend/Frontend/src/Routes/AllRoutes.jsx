import { Route, Routes } from "react-router-dom";
import Login from "../Components/Signup-login/Login";
import Signup from "../Components/Signup-login/Signup";
import Home from "../Components/Home/Home";
import MainComponents from "../Components/Main/Main";
import CompleteTask from "../Components/CompleteTask";
import AuthRoute from "../Private/AuthRoute";
import TodoTask from "../Components/Todo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* Wrap with private Route if user Login then  he can access this page */}
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <MainComponents />
          </AuthRoute>
        }
      />
      {/* Wrap with private Route if user Login then  he can access this page */}

      <Route
        path="/todo"
        element={
          <AuthRoute>
            <TodoTask />
          </AuthRoute>
        }
      />

      {/* Wrap with private Route if user Login then  he can access this page */}
      <Route
        path="/complete"
        element={
          <AuthRoute>
            <CompleteTask />
          </AuthRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
