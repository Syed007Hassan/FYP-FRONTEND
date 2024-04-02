import { createSlice } from "@reduxjs/toolkit";
import {
  createApplication,
  updateApplicationStage,
  getApplicationsByJobId,
  updateApplicationStatus,
  resetSuccess,
  updateApplicationFeedback,
} from "./applicationAction";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    application: null,
    loading: false,
    error: null as string | null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createApplication.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createApplication.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.application = action.payload;
    });
    builder.addCase(createApplication.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addCase(updateApplicationStage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateApplicationStage.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.application = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addCase(updateApplicationStage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addCase(getApplicationsByJobId.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getApplicationsByJobId.fulfilled, (state, action) => {
      state.loading = false;
      state.application = action.payload;
    });
    builder.addCase(getApplicationsByJobId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

const updateApplicationSlice = createSlice({
  name: "updateApplication",
  initialState: {
    application: null,
    loading: false,
    error: null as string | null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateApplicationStatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateApplicationStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.application = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addCase(updateApplicationStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

const updateApplicationFeedbackSlice = createSlice({
  name: "updateApplicationFeedback",
  initialState: {
    application: null,
    loading: false,
    error: null as string | null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateApplicationFeedback.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateApplicationFeedback.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.application = action.payload;
    });
    builder.addCase(updateApplicationFeedback.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

export const applicationReducer = applicationSlice.reducer;
export const updateApplicationReducer = updateApplicationSlice.reducer;
export const updateApplicationFeedbackReducer =
  updateApplicationFeedbackSlice.reducer;
