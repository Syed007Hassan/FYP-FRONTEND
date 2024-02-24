import { createSlice } from "@reduxjs/toolkit";
import { createApplication, resetSuccess } from "./applicationAction";

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
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
    builder.addCase(createApplication.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});

export default applicationSlice.reducer;
