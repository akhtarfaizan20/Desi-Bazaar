import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";

const Pagination = ({ page, totalPages, setSearchParams, searchParams }) => {
  let params = {};
  for (const entry of searchParams.entries()) {
    params[entry[0]] = entry[1];
  }
  let Buttons = new Array(totalPages).fill(0).map((el, i) => {
    return (
      <Button
        colorScheme="pink"
        key={i}
        size={"sm"}
        variant={page === i + 1 ? "solid" : "outline"}
        isDisabled={page === i + 1 ? true : false}
        onClick={() => {
          setSearchParams({ ...params, page: i + 1 });
        }}
      >
        {i + 1}
      </Button>
    );
  });
  return (
    <Flex gap={3} m={"auto"} w={"fit-content"} p={10}>
      <Button
        colorScheme="pink"
        size={"sm"}
        isDisabled={page === 1 ? true : false}
        onClick={() => {
          setSearchParams({ ...params, page: page - 1 });
        }}
      >
        Prev
      </Button>
      {Buttons}
      <Button
        colorScheme="pink"
        size={"sm"}
        isDisabled={page === totalPages ? true : false}
        onClick={() => {
          setSearchParams({ ...params, page: page + 1 });
        }}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
