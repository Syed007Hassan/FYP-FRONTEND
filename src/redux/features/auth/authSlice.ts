import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

export interface AuthState {
  loading: boolean;
  userInfo: null | {};
  userToken: null | string;
  error: null | string;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending.toString()]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    [registerUser.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
});

export default authSlice.reducer;