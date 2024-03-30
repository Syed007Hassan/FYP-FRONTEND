import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JobResponse, SingleJobResponse } from "@/types/job";
import { Jobs } from "@/data/data";
import {
  CompanyCount,
  ApplicationCount,
  ApplicationsInLastFiveJobs,
} from "@/types/company";

type CreateJobArgs = {
  companyId: string;
  recruiterId: string;
  job: Jobs;
  token: string;
};
export const createJob = createAsyncThunk(
  "job/createJob",
  async ({ companyId, recruiterId, job, token }: CreateJobArgs) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${Backend_URL}/job/createJob/${recruiterId}/${companyId}`,
      job,
      config
    );
    return response.data;
  }
);

export const updateJobStatus = createAsyncThunk(
  "job/updateJobStatus",
  async ({ jobId, status, token }: { jobId: string; status: string; token: string }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `${Backend_URL}/job/updateJobStatus/${jobId}`,
      { status },
      config
    );
    return response.data;
  }
);

export const resetSuccess = createAsyncThunk("job/resetSuccess", async () => {
  return false;
});

export const JobApi = createApi({
  reducerPath: "jobApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/job/",
    baseUrl: `${Backend_URL}/job/`,
  }),
  endpoints: (builder) => ({
    getJob: builder.query<SingleJobResponse, { jobId: string }>({
      query: ({ jobId }) => `findOneByJobId/${jobId}`,
    }),
    getJobs: builder.query<JobResponse, { id: string }>({
      query: ({ id }) => `findOneByCompanyId/${id}`,
    }),
    getAllJobs: builder.query<JobResponse, void>({
      query: () => `findAll`,
    }),
    getTotalJobs: builder.query<CompanyCount, { id: number }>({
      query: ({ id }) => `findTotalJobsByCompanyId/${id}`,
    }),
    getActiveJobs: builder.query<CompanyCount, { id: number }>({
      query: ({ id }) => `findActiveJobsByCompanyId/${id}`,
    }),
    getJobsCountInMonths: builder.query<ApplicationCount, { id: number }>({
      query: ({ id }) => `findJobsCountInAllMonthsByCompanyId/${id}`,
    }),
    getApplicationsCountInMonths: builder.query<
      ApplicationCount,
      { companyId: number }
    >({
      query: ({ companyId }) =>
        `findApplicationsCountInAllMonthsByCompanyId/${companyId}`,
    }),
    getApplicationsCountInLastFiveJobs: builder.query<
      ApplicationsInLastFiveJobs,
      { companyId: number }
    >({
      query: ({ companyId }) =>
        `findApplicationsInLastFiveJobsByCompanyId/${companyId}`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobQuery,
  useGetAllJobsQuery,
  useGetActiveJobsQuery,
  useGetApplicationsCountInLastFiveJobsQuery,
  useGetApplicationsCountInMonthsQuery,
  useGetJobsCountInMonthsQuery,
  useGetTotalJobsQuery,
} = JobApi;
