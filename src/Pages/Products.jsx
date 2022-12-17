import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductData, getTotalPages } from "../API/api";
import ProductContainer from "../Components/ProductsPageContent/ProductContainer";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const { target } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  useEffect(() => {
    let params = { target: target };
    for (const entry of searchParams.entries()) {
      params[entry[0]] = entry[1];
    }
    getTotalPages(params)
      .then((res) => setTotalPages(res))
      .catch((err) => console.log(err));

    getProductData(params)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => console.log(err));
    setPage(+searchParams.get("page") || 1);
  }, [target, page, searchParams]);

  return (
    <Box pt={"120px"}>
      <ProductContainer
        data={productData}
        totalPages={totalPages}
        page={page}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </Box>
  );
};

export default Products;
