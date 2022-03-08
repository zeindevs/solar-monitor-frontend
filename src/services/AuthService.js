import axios from "axios";
import authHeader, { axiosJWT } from "./AuthHeader";

const API_URL = "http://103.120.232.151:6001/auth/";

class AuthService {
  async login(email, password) {
    try {
      const response = await axios.post(API_URL + "jwt/create", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        // console.log(response)
      }
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(
        "No active account found with the given credentials"
      );
    }
  }

  async logout() {
    const response = await axiosJWT.delete(API_URL + "logout", {
      headers: authHeader(),
    });
    if (response.status === 200) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
    }
    return response.data;
  }

  async register(username, email, phone_number, password) {
    await axiosJWT
      .post(API_URL + "signup", {
        username,
        phone_number,
        email,
        password,
      })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return Promise.reject("");
      });
  }
}

export default new AuthService();
