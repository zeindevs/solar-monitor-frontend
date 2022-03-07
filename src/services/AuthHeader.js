import axios from "axios";
import jwtDecode from "jwt-decode";

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
    const refresh_token = localStorage.getItem("refresh");
    const decoded = jwtDecode(localStorage.getItem("token"));
    if (decoded.exp * 1000 < currentDate.getTime()) {
      const { status, data } = await axios.post(API_URL + "refresh", {
        refresh: refresh_token,
      });
      if (status === 200) {
        localStorage.setItem("token", data.access);
        // localStorage.setItem("refresh", data.refresh);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
      }
      window.location.reload();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
