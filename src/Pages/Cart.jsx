import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  deleteTheDataFromCart,
  getUsersCartData,
  patchTheQuantityOfCart,
} from "../API/api";
import CartContainer from "../Components/CartPageComponents/CartContainer";
import CartTotal from "../Components/CartPageComponents/CartTotal";
import { AuthContext } from "../Contexts/AuthContextProvider";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    handleEffect();
  }, []);

  const handleEffect = () => {
    setLoader(true);
    getUsersCartData(currentUser.id)
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };

  // this function will handle the delete the item from the cart
  const removeItem = (id) => {
    deleteTheDataFromCart(id)
      .then((res) => {
        toast({
          title: "Item removed",
          description: "Item is successfully removed from the cart.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        handleEffect();
      })
      .catch((err) => console.log(err));
  };

  // this function will handle the quantity change
  const changeQty = (id, val) => {
    patchTheQuantityOfCart(id, val)
      .then((res) => {
        handleEffect();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Box px={useBreakpointValue({ base: "10px", md: "100px" })} py={"100px"}>
        <Heading textAlign={"center"} color={"pink.400"} mb={"20px"}>
          Your Bag
        </Heading>
        <Flex
          direction={useBreakpointValue({ base: "column", md: "row" })}
          gap={"30px"}
        >
          <CartContainer
            cartData={cartData}
            removeItem={removeItem}
            changeQty={changeQty}
          />
          <CartTotal cartData={cartData} />
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
