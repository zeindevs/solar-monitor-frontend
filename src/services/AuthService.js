import axios from "axios";
import authHeader, { axiosJWT } from "./AuthHeader";

const API_URL = "http://103.120.232.151:6001/auth/";

class AuthService {
  async login(email, password) {
    const response = await axios.post(API_URL + "jwt/create", {
      email,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
    }
    return response.data;
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
    const response = await axiosJWT.post(API_URL + "signup", {
      username,
      phone_number,
      email,
      password,
    });
    return response.data;
  }
}

export default new AuthService()