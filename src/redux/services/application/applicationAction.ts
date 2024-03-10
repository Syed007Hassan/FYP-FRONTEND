import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApplicationResponse } from "@/types/application";

type CreateApplicationArgs = {
  jobId: string;
  applicantId: string;
};

type UpdateApplicationStageArgs = {
  jobId: string;
  applicantId: string;
  stageId: string;
};

type UpdateApplicationStatusArgs = {
  jobId: string;
  applicantId: string;
  status: string;
};

export const createApplication = createAsyncThunk(
  "application/createApplication",
  async ({ jobId, applicantId }: CreateApplicationArgs) => {
    try {
      const response = await axios.post(
        `${Backend_URL}/application/createApplication/${jobId}/${applicantId}`
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateApplicationStage = createAsyncThunk(
  "application/updateApplicationStage",
  async ({ jobId, applicantId, stageId }: UpdateApplicationStageArgs) => {
    try {
      const response = await axios.patch(
        `${Backend_URL}/application/updateApplicationStage/${jobId}/${applicantId}/${stageId}`
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateApplicationStatus = createAsyncThunk(
  "application/updateApplicationStatus",
  async ({ jobId, applicantId, status }: UpdateApplicationStatusArgs) => {
    try {
      const response = await axios.patch(
        `${Backend_URL}/application/updateApplicationStatus/${jobId}/${applicantId}`,
        { status }
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const getApplicationsByJobId = createAsyncThunk(
  "application/getApplicationsByJobId",
  async (jobId: string) => {
    try {
      const response = await axios.get(
        `${Backend_URL}/application/findByJobId/${jobId}`
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
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
    getApplicationsByJobId: builder.query<
      ApplicationResponse,
      { jobId: string }
    >({
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
    getAllApplications: builder.query<any, void>({
      query: () => `/application/findAll`,
    }),
  }),
});

export const {
  useGetApplicationsByJobIdQuery,
  useGetApplicationsByApplicantIdQuery,
  useGetApplicationByJobIdAndApplicantIdQuery,
  useGetAllApplicationsQuery,
} = ApplicationApi;
