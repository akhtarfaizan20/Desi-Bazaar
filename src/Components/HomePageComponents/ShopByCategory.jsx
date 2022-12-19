import {
  Box,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const ShopByCategory = () => {
  const Images = new Array(34)
    .fill(0)
    .map((el, i) => (el = `/Images/ShopByImages/${i + 1}.png`));
  return (
    <>
      <Box>
        <Image
          src="/Images/ShopByImages/Banner.png"
          h={useBreakpointValue({ base: "70px", md: "100%" })}
        />
      </Box>
      <Box>
        <Grid
          templateColumns={useBreakpointValue({
            base: "repeat(2, 1fr)",
            md: "repeat(6, 1fr)",
          })}
          gap={useBreakpointValue({
            base: "2",
            md: "8",
          })}
          px={useBreakpointValue({
            base: 2,
            md: 16,
          })}
          alignItems={"center"}
        >
          {Images.map((el) => {
            return (
              <GridItem key={el}>
                <Image src={el} w="100%" />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ShopByCategory;
