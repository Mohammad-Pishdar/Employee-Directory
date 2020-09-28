import axios from "axios";

//Getting a list of random people in Australia from random user API to populate our table

export const getEmployees = function() {
  return axios.get("https://randomuser.me/api/?results=200&nat=au");
};