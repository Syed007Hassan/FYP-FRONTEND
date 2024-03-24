import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteRegisteredEmployee,
  UpdateRegisteredEmployee,
  createEmployee,
} from "./recruiterAction";
import { updateUser } from "./recruiterAction";

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
  extraReducers: (builder) => {
    // [createEmployee.fulfilled.toString()]: (state, action) => {
    //   state.success = true;
    // },
    builder
      .addCase(createEmployee.fulfilled.toString(), (state, action) => {
        state.success = true;
      })
      .addDefaultCase((state, action) => {
        state.success = false;
      });
  },
});

const userSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // [updateUser.fulfilled.toString()]: (state, action) => {
    //   state.success = true;
    // },

    builder
      .addCase(updateUser.fulfilled.toString(), (state, action) => {
        state.success = true;
      })
      .addCase(
        UpdateRegisteredEmployee.fulfilled.toString(),
        (state, action) => {
          state.success = true;
        }
      )
      .addCase(
        DeleteRegisteredEmployee.fulfilled.toString(),
        (state, action) => {
          state.success = true;
        }
      )
      .addDefaultCase((state, action) => {
        state.success = false;
      });
  },
});

export const employeeReducer = employeeSlice.reducer;
export const userReducer = userSlice.reducer;
