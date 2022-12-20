import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTheDataFromCart,
  getUsersCartData,
  patchTheQuantityOfCart,
  placeOrder,
} from "../API/api";
import CartContainer from "../Components/CartPageComponents/CartContainer";
import CartTotal from "../Components/CartPageComponents/CartTotal";
import { AuthContext } from "../Contexts/AuthContextProvider";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false);
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

  // this function will place the order
  const handlePlaceOrder = () => {
    if (cartData.length === 0) {
      toast({
        title: "Cart in empty",
        description: "Kindly Add the Product in you cart",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    let order = {
      userId: currentUser,
      products: cartData,
      status: "Confirmed",
    };
    setButtonLoading(true);
    placeOrder(order)
      .then(async () => {
        toast({
          title: "Order Successfull",
          description: "Your Order has been placed successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        await clearCart(0);
        handleEffect();
        navigate("/");
      })
      .catch((err) => {
        console.log("hi");
        toast({
          title: "Order Failed",
          description:
            "Something went wrong with your order, Please try again!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };
  const clearCart = (ind) => {
    if (cartData.length === ind) {
      setButtonLoading(false);
      return Promise.resolve("done");
    }
    deleteTheDataFromCart(cartData[ind].id)
      .then((res) => {
        clearCart(++ind);
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
          <CartTotal
            cartData={cartData}
            handlePlaceOrder={handlePlaceOrder}
            buttonLoading={buttonLoading}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
