import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
const user = localStorage.getItem("token");

export const actionLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    return await AuthService.login(username, password);
  }
);

export const actionLogout = createAsyncThunk("user/logout", async () => {
  return await AuthService.logout();
});

const userEntity = createEntityAdapter();

const initialState = userEntity.getInitialState({
  user: user ? user : null,
  isLoggedIn: user ? true : false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [actionLogin.pending]: (state) => {
      state.isFetching = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [actionLogin.rejected]: (state, { error }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = error.message;
    },
    [actionLogin.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.access;
      state.errorMessage = "";
    },
    [actionLogout.pending]: (state) => {
      state.isFetching = true;
      state.errorMessage = "";
    },
    [actionLogout.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [actionLogout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.isFetching = false;
      state.user = null;
      state.errorMessage = "";
    },
  },
});

export const authSelectors = userEntity.getSelectors((state) => state.auth);

export default authSlice.reducer;
