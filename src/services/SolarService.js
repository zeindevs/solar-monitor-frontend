import authHeader, { axiosJWT } from "./AuthHeader";

const API_URL = "http://103.120.232.151:6001/api/v1/solar/";

class SolarService {
  async getAllDevice() {
    const response = await axiosJWT.get(API_URL);
    const { data, status } = response;
    if (status === 200) {
      return data;
    } else {
      Promise.reject(data);
    }
  }

  async getSolarCurrent(id) {
    const response = await axiosJWT.get(API_URL + "device/" + id + "/current/", {
      headers: authHeader(),
    });
    const { data, status } = response;
    if (status === 200) {
      return data;
    } else {
      Promise.reject(data);
    }
  }
}

export default new SolarService();
