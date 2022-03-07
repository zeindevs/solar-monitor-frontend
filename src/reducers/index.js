import { combineReducers } from "redux";
import auth from "../features/AuthSlice";
import device from "../features/DeviceSlice";
import solar from "../features/SolarSlice";

export default combineReducers({
  auth,
  device,
  solar,
});
