// updateSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateApplicantDetails, resetSuccess, uploadProfileImage } from "./applicantAction";

const applicantSlice = createSlice({
  name: "update",
  initialState: {
    data: null,
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
      state.data = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addCase(uploadProfileImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

export default applicantSlice.reducer;
