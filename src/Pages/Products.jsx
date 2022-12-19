import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductData, getTotalPages } from "../API/api";
import ProductContainer from "../Components/ProductsPageContent/ProductContainer";
import ProductSidebar from "../Components/ProductsPageContent/ProductSidebar";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { target } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  useEffect(() => {
    setLoader(true);
    let params = { target: target };
    for (const entry of searchParams.entries()) {
      if (entry[0] === "start" || entry[0] === "end") {
        params[entry[0]] = +entry[1];
      } else {
        params[entry[0]] = entry[1];
      }
    }
    // console.log(params);
    getTotalPages(params)
      .then((res) => setTotalPages(res))
      .catch((err) => console.log(err));

    getProductData(params)
      .then((res) => {
        console.log(res);
        setProductData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
    setPage(+searchParams.get("page") || 1);
  }, [target, page, searchParams]);
  return (
    <Flex pt={"100px"} direction="column">
      <ProductSidebar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <ProductContainer
        data={productData}
        totalPages={totalPages}
        page={page}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        loader={loader}
      />
    </Flex>
  );
};

export default Products;
