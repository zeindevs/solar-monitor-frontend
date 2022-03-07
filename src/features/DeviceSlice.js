import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import DeviceService from "../services/DeviceService";

export const getAllDevices = createAsyncThunk("devices/getAll", async () => {
  return await DeviceService.getAllDevice();
});

export const getOneDevices = createAsyncThunk("devices/getOne", async (id) => {
  return await DeviceService.getOneDevice(id);
});

const deviceEntity = createEntityAdapter({
  selectId: (device) => device.id,
});

const initialState = deviceEntity.getInitialState({
  isFetching: true,
  isSuccess: false,
  isError: false,
  errorMessage: "",
});

const DeviceSlice = createSlice({
  name: "device",
  initialState,
  extraReducers: {
    [getAllDevices.pending]: (state) => {
      state.isFetching = true;
    },
    [getAllDevices.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.errorMessage = payload;
      deviceEntity.removeAll(state);
    },
    [getAllDevices.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      deviceEntity.setAll(state, payload);
    },
    // [getOneDevices.fulfilled]: (state, { payload }) => {
    //   state.isFetching = false;
    //   state.isSuccess = true;
    //   state.devices = payload;
    // },
  },
});

export const deviceSelectors = deviceEntity.getSelectors(
  (state) => state.device
);

export default DeviceSlice.reducer;
