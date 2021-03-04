import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const role = JSON.parse(localStorage.getItem('role'));

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://bw-backend-clouds.herokuapp.com/",
    role: role
  });
};
