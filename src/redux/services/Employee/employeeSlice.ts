import { createSlice } from "@reduxjs/toolkit";
import { updateEmployee } from "./employeeAction";

export interface UpdateState {
  success: boolean;
}

const initialState: UpdateState = {
  success: false,
};

const employeeSlice = createSlice({
  name: "updateEmployee",
  initialState,
  reducers: {},
  extraReducers: {
    [updateEmployee.fulfilled.toString()]: (state, action) => {
      state.success = true;
    },
  },
});

export default employeeSlice.reducer;