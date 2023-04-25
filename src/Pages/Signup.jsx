import React, { useReducer, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { postUser } from "../API/api";

const Form1 = ({ formState, handleChange }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            focusBorderColor="pink.400"
            value={formState.first_name}
            name={"first_name"}
            onChange={handleChange}
            isRequired={true}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            focusBorderColor="pink.400"
            value={formState.last_name}
            name={"last_name"}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email Id"
          focusBorderColor="pink.400"
          value={formState.id}
          name={"id"}
          onChange={handleChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            focusBorderColor="pink.400"
            value={formState.password}
            name={"password"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ formState, handleChange }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="pink.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formState.country}
          onChange={handleChange}
        >
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="pink.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formState.address}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="pink.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formState.city}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="pink.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formState.state}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="ZIP"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="pink.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formState.ZIP}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};
// initial state for sign up form
const intiState = {
  first_name: "",
  last_name: "",
  id: "",
  password: "",
  country: "",
  address: "",
  city: "",
  state: "",
  ZIP: "",
};

// reducer function to change the state of the form
const reducer = (state, action) => {
  switch (action.type) {
    case "first_name": {
      return {
        ...state,
        first_name: action.payload,
      };
    }
    case "last_name": {
      return {
        ...state,
        last_name: action.payload,
      };
    }
    case "id": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "country": {
      return {
        ...state,
        country: action.payload,
      };
    }
    case "address": {
      return {
        ...state,
        address: action.payload,
      };
    }
    case "city": {
      return {
        ...state,
        city: action.payload,
      };
    }
    case "state": {
      return {
        ...state,
        state: action.payload,
      };
    }
    case "ZIP": {
      return {
        ...state,
        ZIP: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Signup() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, intiState);

  //   this function will call the dispatch for formState
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will handle the submit button
  const handleSubmit = () => {
    postUser(formState)
      .then((res) => {
        console.log(res);
        navigate("/login");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Something Went Wrong.",
          description:
            "Something went wrong please try again with different Email",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  return (
    <Box py={"100px"} bg={useColorModeValue("#ffecf0", "pink.800")} h={"100%"}>
      <Box
        borderWidth="1px"
        rounded="lg"
        maxWidth={600}
        p={6}
        m="10px auto"
        as="form"
        bg={useColorModeValue("white", "white")}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme={"pink"}
        ></Progress>
        {step === 1 ? (
          <Form1 formState={formState} handleChange={handleChange} />
        ) : (
          <Form2 formState={formState} handleChange={handleChange} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme={"pink"}
                color={"white"}
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="pink"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        <Text fontSize={"xl"} color={"pink.400"} pt={"20px"} w={"auto"}>
          Are you an existing customer?{" "}
          <RouteLink to={"/login"}>Login from Here</RouteLink>
        </Text>
      </Box>
    </Box>
  );
}
