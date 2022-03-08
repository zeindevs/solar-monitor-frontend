import {
  createAsyncThunk,
  //   createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
const user = localStorage.getItem("token");

const initialState = {
  user: user ? user : null,
  isLoggedIn: user ? true : false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const actionLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    return await AuthService.login(email, password);
  }
);

export const actionLogout = createAsyncThunk("user/login", async () => {
  await AuthService.logout();
});

// const userEntity = createEntityAdapter()

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
  },
});

export default authSlice.reducer;
