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
