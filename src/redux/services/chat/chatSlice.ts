// import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
// import { chatApi } from "./chatAction";

// interface ChatState {
//   loading: "idle" | "pending" | "succeeded" | "failed";
//   error: string | null;
//   res: string | null;
// }

// const initialState: ChatState = {
//   loading: "idle",
//   error: null,
//   res: null,
// };

// const chatSlice = createSlice({
//   name: "chat",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(chatApi.pending, (state) => {
//         state.loading = "pending";
//         state.error = null;
//       })
//       .addCase(chatApi.fulfilled, (state, action: PayloadAction<any>) => {
//         state.loading = "succeeded";
//         state.error = null;
//         state.res = action.payload;
//       })
//         .addCase(chatApi.rejected, (state, action: PayloadAction<any>) => {
//           state.loading = "failed";
//           state.error = action.payload;
//         });
//     //   .addDefaultCase((state, action) => {
//     //     state.loading = "failed";
//     //     state.error = action.payload;
//     //   });
//   },
// });

// export default chatSlice.reducer;
