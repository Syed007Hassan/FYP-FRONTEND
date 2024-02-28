import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stage, newStage, ApiResponse } from "@/types/stage";

type CreateStageArgs = {
  jobId: string;
  stage: newStage;
};

export const addStage = createAsyncThunk(
  "workflow/createWorkflow",
  async ({ jobId, stage }: CreateStageArgs) => {
    const response = await axios.post(
      `${Backend_URL}/workflow/createWorkflow/${jobId}`,
      stage
    );
    return response.data;
  }
);

export const stageApi = createApi({
  reducerPath: "stageApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/workflow/",
    baseUrl: `${Backend_URL}/workflow/`,
  }),
  endpoints: (builder) => ({
    getStage: builder.query<ApiResponse, { id: string }>({
      query: ({ id }) => `findByJobId/${id}`,
    }),
  }),
});

export const { useGetStageQuery } = stageApi;
