import {
  Box,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const TopListedStyles = () => {
  const Images = new Array(18)
    .fill(0)
    .map((el, i) => (el = `/Images/TopListedStyles/${i + 1}.png`));
  console.log(Images);
  return (
    <>
      <Box>
        <Image src="/Images/TopListedStyles/Banner.png" />
      </Box>
      <Box>
        <Grid
          templateColumns={useBreakpointValue({
            base: "repeat(3, 1fr)",
            md: "repeat(9, 1fr)",
          })}
        >
          {Images.map((el) => {
            return (
              <GridItem>
                <Image src={el} w="100%" />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default TopListedStyles;
