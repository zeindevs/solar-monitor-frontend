import authHeader, { axiosJWT } from "./AuthHeader";

// const API_URL = "http://103.120.232.151:6001/api/v1/";
const API_URL = "https://solar-monitor-server.herokuapp.com/api/v1/";

class DeviceService {
  async getAllDevice() {
    const response = await axiosJWT.get(API_URL + "device/", {
      headers: authHeader(),
    });
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }

  async getOneDevice(id) {
    const response = await axiosJWT.get(API_URL + "device/" + id, {
      headers: authHeader(),
    });
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Promise.reject(data);
  }

  async getDeviceCurrent(id) {
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

export default new DeviceService();
