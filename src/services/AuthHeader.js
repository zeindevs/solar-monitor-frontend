import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://103.120.232.151:6001/auth/jwt/";

export default function authHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

export const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    const refresh_token = jwt_decode(localStorage.getItem("refresh"));
    const decoded = jwt_decode(localStorage.getItem("token"));
    if (decoded.exp * 1000 < currentDate.getTime()) {
      const response = await axios.post(API_URL + "refresh", {
        refresh: refresh_token,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
