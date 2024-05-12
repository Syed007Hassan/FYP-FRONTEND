import { createSlice } from "@reduxjs/toolkit";
import { addStage, resetSuccess, removeWorkflow } from "./stageAction";

const stageSlice = createSlice({
  name: "stage",
  initialState: {
    stage: null,
    loading: false,
    error: null,
    success: false,
    deleteSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addStage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addStage.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.stage = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addCase(removeWorkflow.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeWorkflow.fulfilled, (state, action) => {
      state.loading = false;
      state.deleteSuccess = true;
      state.stage = action.payload;
    });
    // builder.addCase(addStage.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

// Export the reducer
export default stageSlice.reducer;
