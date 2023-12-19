import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addAssignee } from './assigneeAction';

const assigneeSlice = createSlice({
  name: 'assignee',
  initialState: {
    assignee: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAssignee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addAssignee.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.assignee = action.payload;
    });
    // builder.addCase(addAssignee.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

// Export the reducer
export default assigneeSlice.reducer;