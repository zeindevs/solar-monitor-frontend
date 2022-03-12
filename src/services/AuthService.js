import axios from "axios";
import { axiosJWT } from "./AuthHeader";

// const API_URL = "http://103.120.232.151:6001/auth/";
const API_URL = "https://solar-monitor-server.herokuapp.com/api/v1/";

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(API_URL + "auth/jwt/create", {
        username,
        password,
      });
      const { data, status } = response;
      if (status === 200) {
        localStorage.setItem("token", data.access);
        localStorage.setItem("refresh", data.refresh);
        return data;
      }
    } catch (error) {
      return Promise.reject(
        "No active account found with the given credentials"
      );
    }
  }

  async logout() {
    // const response = await axiosJWT.delete(API_URL + "auth/jwt/logout");
    // const { data, status } = response;
    // if (status === 200) {
    //   return response.data;
    // }
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    // Promise.reject(data);
    return true;
  }

  async register(username, email, phone_number, password) {
    const response = await axiosJWT.post(API_URL + "auth/jwt/signup", {
      username,
      phone_number,
      email,
      password,
    });
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }

  async profile() {
    const response = await axiosJWT.get(API_URL + "users/me");
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }
}

export default new AuthService();
