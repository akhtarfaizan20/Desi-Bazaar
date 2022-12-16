import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";

import ProductCard from "./ProductCard";

const ProductContainer = ({ data }) => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={useBreakpointValue({
        base: "repeat(5,1fr)",
        md: "repeat(5,1fr)",
      })}
      m="auto"
      w={"fit-content"}
      rowGap={10}
      columnGap={10}
    >
      {data &&
        data.map((el) => {
          return (
            <GridItem
              key={el.id}
              px={3}
              pb={"3"}
              _hover={{
                boxShadow: "xl",
              }}
              maxW={230}
            >
              <ProductCard data={el} />
            </GridItem>
          );
        })}
    </Box>
  );
};

export default ProductContainer;
