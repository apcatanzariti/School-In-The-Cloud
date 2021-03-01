import axios from "axios";

const authConfig = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
  baseURL: "",
};

export const axiosWithAuth = (config = authConfig) => {
  return axios.create(config);
};
