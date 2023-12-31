import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser, loginUser, resetSuccess, resetReject } from "./authActions";

interface UserInfo {
  data: any; // Replace `any` with the actual type of `data`
  success: boolean;
}

export interface AuthState {
  loading: boolean;
  userInfo: null | UserInfo;
  userToken: null | string;
  error: null | string;
  success: boolean;
  reject: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  reject: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending.toString(), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled.toString(), (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(registerUser.rejected.toString(), (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.reject = true;
        state.error = action.payload;
      })
      .addCase(loginUser.pending.toString(), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled.toString(), (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(loginUser.rejected.toString(), (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.reject = true;
        state.error = action.payload;
      })
      .addCase(resetReject.fulfilled, (state) => {
        state.reject = false;
      })
      .addCase(resetSuccess.fulfilled, (state) => {
        state.success = false;
      });
  },
});

export default authSlice.reducer;