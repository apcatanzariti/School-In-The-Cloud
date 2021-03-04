import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.stringify(localStorage.getItem("token"));

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://bw-backend-clouds.herokuapp.com/",
  });
};
