import axios from "axios";

export const login = async (data) => {
  const loginData = await axios.post(
    "http://localhost:3000/api/v1/users/login",
    data
  );
  return loginData;
};

export const register = async (data) => {
  const redisterData = await axios.post(
    "http://localhost:3000/api/v1/users",
    data
  );
  return redisterData;
};

export const getUser = async (data) => {
  const Data = await axios.get("http://localhost:3000/api/v1/users", {
    headers: {
      Authorization: `Bearer ${data}`,
      "Content-Type": "application/json",
    },
  });
  return Data;
};
