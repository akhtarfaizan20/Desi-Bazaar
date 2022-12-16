import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";

import ProductCard from "./ProductCard";
const data = {
  image: "https://m.media-amazon.com/images/I/71sGfOZcpwL._AC_UL320_.jpg",
  url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  brand: "Jockey",
  details: "Men's Regular Fit V Neck Half Sleeved T-Shirt",
  details_url:
    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  ratings: "4.3 out of 5 stars",
  price: "470",
  price_url:
    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
};
const ProductContainer = ({ data }) => {
  return (
    <Grid
      templateColumns={useBreakpointValue({ base: "1fr", md: "repeat(5,1fr)" })}
      alignItems="center"
      border={"1px solid red"}
      rowGap={10}
      m="auto"
      w={"90%"}
    >
      {data &&
        data.map((el) => {
          return (
            <GridItem key={el.image}>
              <ProductCard data={el} />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default ProductContainer;
