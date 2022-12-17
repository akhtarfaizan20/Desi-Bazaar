import { Box, GridItem } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";
import Pagination from "./Pagination";

import ProductCard from "./ProductCard";

const ProductContainer = ({
  data,
  page,
  totalPages,
  setSearchParams,
  searchParams,
}) => {
  return (
    <Box>
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
                border="1px solid #ddd"
                maxW={230}
                borderRadius="md"
              >
                <ProductCard data={el} />
              </GridItem>
            );
          })}
      </Box>
      <Pagination
        page={page}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </Box>
  );
};

export default ProductContainer;
