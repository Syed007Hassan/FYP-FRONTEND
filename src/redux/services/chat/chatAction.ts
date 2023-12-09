import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FLASK_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const chatApi = createAsyncThunk<
//   void,
//   { query: string },
//   { rejectValue: string }
// >("/chat/query", async ({ query }, { rejectWithValue }) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     await axios.get(`${FLASK_URL}/getData/${query}`, config);
//   } catch (error: any) {
//     // return custom error message from backend if present
//     if (error.response && error.response.data.message) {
//       return rejectWithValue(error.response.data.message);
//     } else {
//       return rejectWithValue(error.message);
//     }
//   }
// });

type Chat = {
  data: {
    data: string;
  };
};

export const chatApi = createApi({
  reducerPath: "chatApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),
  endpoints: (builder) => ({
    getChat: builder.query<Chat, { query: string }>({
      query: ({ query }) => `getData/${query}`,
    }),
  }),
});

export const { useGetChatQuery } = chatApi;
