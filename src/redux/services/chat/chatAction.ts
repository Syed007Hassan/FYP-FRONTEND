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
    // baseUrl: "http://localhost:4000/api/",
    baseUrl: `${FLASK_URL}/`,
  }),
  endpoints: (builder) => ({
    getChat: builder.query<Chat, { query: string }>({
      query: ({ query }) => `getJobDescription/${query}`,
    }),
    getApplicantSupport: builder.query<Chat, { query: string }>({
      query: ({ query }) => `getApplicantSupport/${query}`,
    }),
  }),
});

export const getResumeSummary = createAsyncThunk(
  "chat/getResumeSummary",
  async ({ url, job_description }: { url: string, job_description: string }) => {
    const data = {
      url,
      job_description,
    };
    try {
      const response = await axios.post(
        `${FLASK_URL}/getResumeSummary`,
        data
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const { useGetChatQuery, useGetApplicantSupportQuery } = chatApi;
