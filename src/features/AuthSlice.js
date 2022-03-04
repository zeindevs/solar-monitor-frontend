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
    async ({email, password}) => {
        const response = await AuthService.login(email, password);
        return response;
    }
);

export const actionLogout = createAsyncThunk("user/login", async () => {
    await AuthService.logout();
});


// const userEntity = createEntityAdapter({
//     user: (user) => user.data,
//     token: (user) => user.token
// })

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
        [actionLogin.fulfilled]: (state, { payload }) => {
            state.isLoggedIn = true;
            state.isFetching = false;
            state.isSuccess = true;
            state.user = payload;
        },
        [actionLogin.pending]: (state) => {
            state.isFetching = true;
        },
        [actionLogin.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [actionLogout.fulfilled]: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
})

export default authSlice.reducer;