import axios from "axios";

const baseURL = `https://desibazaar.onrender.com`;
// const baseURL = `https://defiant-deer-threads.cyclic.app`;
// const baseURL = "http://localhost:8080";

// function to perform the login

// it will take the email id and return the user
export const getUser = (id) => {
  return axios
    .get(`${baseURL}/users/${id}`)
    .then((res) => Promise.resolve(res))
    .catch(() => Promise.reject("User Not Found"));
};

// this function will perform the signup functionality
// it will take the userForm and post it to the API
export const postUser = (userCredentials) => {
  return axios
    .post(`${baseURL}/users`, userCredentials)
    .then((res) => "Successfull")
    .catch((res) => Promise.reject("Failed"));
};

// this function will take the argument of data and params and will return the data fetched from the API
export const getProductData = ({
  target,
  page,
  sort,
  order,
  category,
  start,
  end,
}) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
        _page: page,
        _limit: 15,
        _sort: sort,
        _order: order,
        category: category,
        price_gte: start,
        price_lte: end,
      },
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

export const getTotalPages = ({
  target,
  sort,
  order,
  category,
  start,
  end,
}) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
        _sort: sort,
        _order: order,
        category: category,
        price_gte: start,
        price_lte: end,
      },
    })
    .then((res) => Promise.resolve(Math.ceil(res.data.length / 15)))
    .catch((err) => Promise.reject(err));
};

// this function will send the data into the cart
export const sendDataToCart = (item) => {
  return axios
    .post(`${baseURL}/cart`, item)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

// this function will return the cart element of the specific user id
export const getUsersCartData = (userId) => {
  return axios
    .get(`${baseURL}/cart`, {
      params: {
        userId: userId,
      },
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

// this function will take the id and delete the element from the cart api

export const deleteTheDataFromCart = (id) => {
  return axios
    .delete(`${baseURL}/cart/${id}`)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};
// this function will take the id and qty and will patch the quantity

export const patchTheQuantityOfCart = (id, qty) => {
  return axios
    .patch(`${baseURL}/cart/${id}`, {
      qty: +qty,
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => {
      console.log("hi");
      Promise.resolve(err);
    });
};

// this function will take the order and post to order api

export const placeOrder = (order) => {
  console.log(order);
  return axios
    .post(`${baseURL}/orders`, order)
    .then(() => Promise.resolve("order placed"))
    .catch(() => Promise.reject("somthing went wrong"));
};
