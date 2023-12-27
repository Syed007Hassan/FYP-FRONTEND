import { createSlice } from "@reduxjs/toolkit";
import { createJob, resetSuccess } from "./jobAction";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    job: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createJob.fulfilled, (state, action) => {
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
    // builder.addCase(createJob.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

// Export the reducer
export default jobSlice.reducer;
