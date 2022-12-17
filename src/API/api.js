import axios from "axios";

const baseURL = `http://localhost:8080`;

// function to perform the login

// it will take the email id and return the user
export const getUser = (email) => {
  return axios
    .get(`${baseURL}/users/${email}`)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject("User Not Found"));
};

// this function will perform the signup functionality
// it will take the userForm and post it to the API
export const postUser = (userCredentials) => {
  return axios
    .post(`${baseURL}/users`, userCredentials)
    .then((res) => Promise.resolve("Successfull"))
    .catch((res) => Promise.reject("Failed"));
};

// this function will take the argument of data and params and will return the data fetched from the API
export const getProductData = ({ target, page, sort, order }) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
        _page: page,
        _limit: 15,
        _sort: sort,
        _order: order,
      },
    })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

export const getTotalPages = ({ target }) => {
  return axios
    .get(`${baseURL}/products`, {
      params: {
        target: target,
      },
    })
    .then((res) => Promise.resolve(Math.ceil(res.data.length / 15)))
    .catch((err) => Promise.reject(err));
};
