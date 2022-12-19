import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, HStack, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SlHandbag } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { sendDataToCart } from "../../API/api";
import { AuthContext } from "../../Contexts/AuthContextProvider";

let dollarIndianLocale = Intl.NumberFormat("en-IN");

const ProductCard = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    let obj = {
      userId: currentUser.id,
      product: data,
      qty: 1,
    };
    if (currentUser.id !== undefined) {
      sendDataToCart(obj)
        .then((res) => {
          toast({
            title: "Item added To your cart",
            description: "An item has been successfully added to your cart",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "Something went wrong try again letter",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Kindly Login",
        description: "Kindly login before adding any product in your cart",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
        <Center>
          <Image
            src={data.image}
            alt={data.brand}
            borderRadius="lg"
            h={"200px"}
            w={"100px"}
            mx={10}
          />
        </Center>
        <Stack mt="1" lineHeight={4}>
          <Text size="md" fontWeight={"bold"}>
            {data.brand}
          </Text>
          <Text color={"gray.600"} size={"md"} noOfLines={1}>
            {data.desc}
          </Text>
          <Text color={"gray.600"} size={"md"} noOfLines={1}>
            {data.ratings}
          </Text>
          <HStack>
            <Text color="gray.900" fontSize="lg" fontWeight={"bold"}>
              ₹{dollarIndianLocale.format(data.price)}
            </Text>
            <Text fontSize="xs" as="s">
              {data.strickedoffprice}
            </Text>
          </HStack>

          <Center>
            <Button
              variant="outline"
              colorScheme="pink"
              w={"fit-content"}
              textAlign={"center"}
              p={1}
              leftIcon={<SlHandbag />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
