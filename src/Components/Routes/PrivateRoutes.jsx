import { useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
