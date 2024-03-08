import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { uploadProfileImage, uploadResume } from "./uploadAction";

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadProfileImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
  },
});

const UploadCVSlice = createSlice({
  name: "uploadCV",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadResume.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadResume.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
  },
});

export const uploadReducer = uploadSlice.reducer;
export const uploadCVReducer = UploadCVSlice.reducer;
