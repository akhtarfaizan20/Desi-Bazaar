import {
  Box,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const SuperSaving = () => {
  const Images = new Array(18)
    .fill(0)
    .map((el, i) => (el = `/Images/SuperSavingZone/${i + 1}.png`));
  console.log(Images);
  return (
    <>
      <Box>
        <Image
          src="/Images/SuperSavingZone/Banner.png"
          h={useBreakpointValue({ base: "70px", md: "100%" })}
        />
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

export default SuperSaving;
