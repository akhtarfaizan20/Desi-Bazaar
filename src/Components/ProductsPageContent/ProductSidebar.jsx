import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Checkbox,
  Box,
  VStack,
  Flex,
  Select,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const ProductSidebar = ({ searchParams, setSearchParams }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let params = {};
  for (const entry of searchParams.entries()) {
    if (entry[0] === "start" || entry[0] === "end") {
      params[entry[0]] = +entry[1];
    } else {
      params[entry[0]] = entry[1];
    }
  }
  const handleSort = (e) => {
    let params = {};
    for (const entry of searchParams.entries()) {
      if (entry[0] === "start" || entry[0] === "end") {
        params[entry[0]] = +entry[1];
      } else {
        params[entry[0]] = entry[1];
      }
    }

    if (e.target.value === "default") {
      params.sort = undefined;
      params.order = undefined;
      setSearchParams({ ...params });
    } else {
      let [order, sort] = e.target.value.split("-");
      setSearchParams({ ...params, sort: sort, order: order });
    }
  };
  return (
    <Flex>
      <Button
        colorScheme="pink"
        onClick={onOpen}
        w={"fit-content"}
        mx={"7%"}
        mb={"20px"}
      >
        <FaFilter />
      </Button>
      <Select w="fit-content" onChange={handleSort}>
        <option value="default">Apply Sorting</option>
        <option value="asc-price">Sort by Price: low to high</option>
        <option value="desc-price">Sort by Price: high to low</option>
        <option value="desc-ratings">Top Ratings</option>
      </Select>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Apply Filters</DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Category
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack alignItems={"left"}>
                        <Checkbox size="lg" colorScheme="gray" name="t-shirt">
                          T-shirts
                        </Checkbox>
                        <Checkbox size="lg" colorScheme="gray" name="Jeans">
                          Jeans
                        </Checkbox>
                      </VStack>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Price
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray" name="₹ 500 - 999">
                        less then ₹199
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="gray"
                        name="₹ 1000 - 1499"
                      >
                        ₹200 - ₹499
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="gray"
                        name="₹ 1500 - 1999"
                      >
                        ₹500 - ₹999
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="gray"
                        name="₹ 2000 - 2500"
                      >
                        ₹1000 - ₹1999
                      </Checkbox>
                      <Checkbox
                        size="lg"
                        colorScheme="gray"
                        name="₹ 2000 - 2500"
                      >
                        More then ₹2000
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Memory
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Features
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Color
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Screen-Size
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Processor
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* 
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Price
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox size="lg" colorScheme="gray" name="₹ 500 - 999">
                  ₹ 500 - 999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1000 - 1499">
                  ₹ 1000 - 1499
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1500 - 1999">
                  ₹ 1500 - 1999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 2000 - 2500">
                  ₹ 2000 - 2500
                </Checkbox>
              </AccordionPanel>
            </>
          )}
        </AccordionItem> */}

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Delievery Type
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Offers
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default ProductSidebar;
