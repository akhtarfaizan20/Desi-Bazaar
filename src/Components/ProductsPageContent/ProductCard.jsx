import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { SlHandbag } from "react-icons/sl";

const ProductCard = ({ data }) => {
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
          <Text color="gray.900" size="md" fontWeight={"bold.600"}>
            ₹{data.price}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="pink"
              w={"fit-content"}
              textAlign={"center"}
              p={1}
              leftIcon={<SlHandbag />}
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
