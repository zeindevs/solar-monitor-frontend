import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import SolarService from "../services/SolarService";

export const getAllSolar = createAsyncThunk("solar/getAll", async () => {
  return await SolarService.getAllSolar();
});

export const getCurrentSolar = createAsyncThunk("solar/getCurrent", async (id) => {
  return await SolarService.getSolarCurrent(id);
});

const solarEntity = createEntityAdapter({
  selectId: (solar) => solar.id,
});

const initialState = solarEntity.getInitialState({
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
});

const SolarSlice = createSlice({
  name: "solar",
  initialState,
  extraReducers: {
    [getAllSolar.pending]: (state) => {
      state.isFetching = true;
    },
    [getAllSolar.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      solarEntity.removeAll(state);
    },
    [getAllSolar.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.solar = payload;

      solarEntity.setAll(state, payload);
    },

    [getCurrentSolar.pending]: (state) => {
      state.isFetching = true;
    },
    [getCurrentSolar.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      solarEntity.removeAll(state);
    },
    [getCurrentSolar.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.solar = payload;
      solarEntity.removeAll(state);
      solarEntity.setOne(state, payload);
    },
  },
});

export const solarSelectors = solarEntity.getSelectors((state) => state.solar)

export default SolarSlice.reducer;
