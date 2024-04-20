import { getResumeSummary } from "./chatAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeSummary: null,
  success: false,
  loading: false,
  error: "",
};

const ResumeSummarySlice = createSlice({
  name: "resumeSummary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResumeSummary.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getResumeSummary.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.resumeSummary = payload.data;
      state.success = true;
    });
  },
});

export const resumeSummaryReducer = ResumeSummarySlice.reducer;
