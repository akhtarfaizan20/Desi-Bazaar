import { useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../API/api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || {}
  );
  const [isAuth, setAuth] = useState(currentUser.id ? true : false);

  // function for auhenticating the user
  const login = (loginCredentials) => {
    getUser(loginCredentials.email)
      .then((res) => {
        if (res.data.password === loginCredentials.password) {
          setAuth(true);
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          setCurrentUser(res.data);
          navigate("/");
          toast({
            title: "Login Successful",
            description: "You are now logged in, Explore our Products",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Oops! Wrong Password",
            description: "Kindly check your Password",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Oops! email not registered",
          description: "Kindly use another email or create a new account",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  // function for logging out the user
  const logout = () => {
    localStorage.removeItem("currentUser");
    setAuth(false);
    toast({
      title: "Logged Out",
      description: "You have successfully logged out",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
