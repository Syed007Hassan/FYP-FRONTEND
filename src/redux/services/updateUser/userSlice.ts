import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./userAction";

export interface UpdateState {
  success: boolean;
}

const initialState: UpdateState = {
  success: false,
};

const userSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUser.fulfilled.toString()]: (state, action) => {
      state.success = true;
    },
  },
});

export default userSlice.reducer;