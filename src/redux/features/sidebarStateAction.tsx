import { createSlice } from "@reduxjs/toolkit";

const sidebarStateSlice = createSlice({
  name: "sidebarState",
  initialState: {
    sidebarState: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarState = !state.sidebarState;
    },
  },
});

export const { toggleSidebar } = sidebarStateSlice.actions;

// Export the reducer
export default sidebarStateSlice.reducer;