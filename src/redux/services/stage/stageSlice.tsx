import { createSlice } from "@reduxjs/toolkit";
import { addStage } from "./stageAction";

const stageSlice = createSlice({
  name: "stage",
  initialState: {
    stage: null,
    loading: false,
    error: null,
    success: false,
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
    // builder.addCase(addStage.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

// Export the reducer
export default stageSlice.reducer;