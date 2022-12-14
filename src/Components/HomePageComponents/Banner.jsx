import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Image src={"/Images/Slider/banner.png"} w={"100%"} />
      <Image src={"/Images/Slider/banner2.png"} w={"100%"} />
    </Box>
  );
};

export default Banner;
