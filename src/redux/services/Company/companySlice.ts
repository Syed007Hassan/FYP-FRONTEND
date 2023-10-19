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
  extraReducers: (builder) => {
    // [updateCompany.fulfilled.toString()]: (state, action) => {
    //   state.success = true;
    // },
    builder
    .addCase(updateCompany.fulfilled.toString(), (state, action) => {
      state.success = true;
    })
    .addDefaultCase((state, action) => {
      state.success = false;
    });

  },
});

export default companySlice.reducer;