import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JobResponse, SingleJobResponse  } from "@/types/job";
import { Jobs } from "@/data/data";

type CreateJobArgs = {
  companyId: string;
  recruiterId: string;
  job: Jobs;
};
export const createJob = createAsyncThunk(
  "job/createJob",
  async ({ companyId, recruiterId, job }: CreateJobArgs) => {
    const response = await axios.post(
      `${Backend_URL}/job/createJob/${recruiterId}/${companyId}`,
      job
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
    baseUrl: "http://localhost:5000/api/job/",
  }),
  endpoints: (builder) => ({
    getJob: builder.query<SingleJobResponse, {jobId: string}>({
      query: ({jobId}) => `findOneByJobId/${jobId}`,
    }),
    getJobs: builder.query<JobResponse, {id: string}>({
      query: ({id}) => `findOneByCompanyId/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobQuery } = JobApi;
