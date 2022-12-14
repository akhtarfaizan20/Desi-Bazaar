import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/HomePageComponents/Banner";
import Carousel from "../Components/HomePageComponents/Carousel";
import Deals from "../Components/HomePageComponents/Deals";
import SuperSaving from "../Components/HomePageComponents/SuperSaving";
import TopListedStyles from "../Components/HomePageComponents/TopListedStyles";
import NeverSeen from "../Components/HomePageComponents/NeverSeen";
import ShopByCategory from "../Components/HomePageComponents/ShopByCategory";
const HomePage = () => {
  return (
    <Box pt={"120px"}>
      {/* crousel */}
      <Carousel />
      {/* Banner bellow crousel */}
      <Banner />
      {/* This will show the deals images to the UI bellow the banner */}
      <Deals />
      {/* This will show the super saving zone images to the UI bellow the banner */}
      <SuperSaving />
      {/* Super Saving Mode */}
      <TopListedStyles />
      {/* Never Seen Before Offers will be shown Here */}
      <NeverSeen />
      {/* Shop by category section will be here  */}
      <ShopByCategory />
    </Box>
  );
};

export default HomePage;
