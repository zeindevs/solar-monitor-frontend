import authHeader, { axiosJWT } from "./AuthHeader";

// const API_URL = "http://103.120.232.151:6001/api/v1/solar/";
const API_URL = "https://solar-monitor-server.herokuapp.com/api/v1/solar/";

class SolarService {
  async getAllDevice() {
    const response = await axiosJWT.get(API_URL);
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }

  async getSolarCurrent(id) {
    const response = await axiosJWT.get(
      API_URL + "device/" + id + "/current/",
      {
        headers: authHeader(),
      }
    );
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }
}

export default new SolarService();
