import { createSlice } from "@reduxjs/toolkit";
import { updateCompany } from "./companyAction";

export interface UpdateState {
  success: boolean;
}

const initialState: UpdateState = {
  success: false,
};

const companySlice = createSlice({
  name: "updateCompany",
  initialState,
  reducers: {},
  extraReducers: {
    [updateCompany.fulfilled.toString()]: (state, action) => {
      state.success = true;
    },
  },
});

export default companySlice.reducer;