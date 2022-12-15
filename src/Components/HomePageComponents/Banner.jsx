import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Image
        src={"/Images/Slider/banner.png"}
        w="100%"
        h={useBreakpointValue({ base: "70px", md: "100%" })}
      />
      <Image
        src={"/Images/Slider/banner2.png"}
        h={useBreakpointValue({ base: "70px", md: "100%" })}
      />
    </Box>
  );
};

export default Banner;
