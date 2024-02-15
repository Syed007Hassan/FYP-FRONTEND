// updateSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateApplicantDetails, resetSuccess } from "./updateAction";

const updateSlice = createSlice({
  name: "update",
  initialState: {
    job: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateApplicantDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateApplicantDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.job = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

export const updateProfileReducer = updateSlice.reducer;
