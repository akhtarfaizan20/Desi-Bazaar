import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useContext, useReducer } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Link as RouteLink } from "react-router-dom";

const initState = {
  email: "",
  password: "",
};

// function for changing the formState using useReducer hook
const reducer = (state, action) => {
  switch (action.type) {
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Login() {
  const { login } = useContext(AuthContext);
  const [formState, dispatch] = useReducer(reducer, initState);

  //   this function will handle the change of input and will dispatch the data to the reducer function
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will call the
  const handleSubmit = () => {
    login(formState);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#ffecf0", "pink.800")}
      pt={"50px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"gray.600"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"pink.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          //   boxShadow={"lg"}
        >
          <Stack>
            <Image
              src={"https://i.ibb.co/WPwxKHZ/login-Banner.png"}
              w="700px"
            />
            <Stack spacing={4} p={8}>
              <FormControl id="email" outlineColor={"pink.400"}>
                <FormLabel>Email address</FormLabel>

                <Input
                  type="email"
                  placeholder="Enter registered email"
                  focusBorderColor="pink.400"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  focusBorderColor="pink.400"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  value={formState.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"pink.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"pink.400"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                <Text fontSize={"xl"} color={"pink.400"} mt={"-20px"}>
                  Are you new?{" "}
                  <RouteLink to={"/signup"}>Sign Up Here</RouteLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
