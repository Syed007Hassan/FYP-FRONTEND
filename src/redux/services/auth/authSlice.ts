import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;