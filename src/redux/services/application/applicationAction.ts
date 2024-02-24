import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CreateApplicationArgs = {
  jobId: string;
  applicantId: string;
};

export const createApplication = createAsyncThunk(
  "application/createApplication",
  async ({ jobId, applicantId }: CreateApplicationArgs) => {
    const response = await axios.post(
      `${Backend_URL}/application/createApplication/${jobId}/${applicantId}`
    );
    return response.data;
  }
);

export const resetSuccess = createAsyncThunk(
  "application/resetSuccess",
  async () => {
    return false;
  }
);

export const ApplicationApi = createApi({
  reducerPath: "applicationApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${Backend_URL}`,
  }),
  endpoints: (builder) => ({
    getApplicationsByJobId: builder.query<any, { jobId: string }>({
      query: ({ jobId }) => `/application/findByJobId/${jobId}`,
    }),
    getApplicationsByApplicantId: builder.query<any, { applicantId: string }>({
      query: ({ applicantId }) =>
        `/application/findByApplicantId/${applicantId}`,
    }),
    getApplicationByJobIdAndApplicantId: builder.query<
      any,
      { jobId: string; applicantId: string }
    >({
      query: ({ jobId, applicantId }) =>
        `/application/findByJobIdAndApplicantId/${jobId}/${applicantId}`,
    }),
  }),
});
