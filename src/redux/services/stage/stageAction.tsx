import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stage, newStage, ApiResponse } from "@/types/stage";

type CreateStageArgs = {
  jobId: string;
  stage: newStage;
  token: string;
};

export const addStage = createAsyncThunk(
  "workflow/createWorkflow",
  async ({ jobId, stage, token }: CreateStageArgs) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${Backend_URL}/workflow/createWorkflow/${jobId}`,
      stage,
      config
    );
    return response.data;
  }
);

export const removeWorkflow = createAsyncThunk(
  "workflow/deleteStage",
  async ({ workflowId, token }: { workflowId: string; token: string }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `${Backend_URL}/workflow/removeWorkflow/${workflowId}`,
      config
    );
    return response.data;
  }
);

export const resetSuccess = createAsyncThunk("stage/resetSuccess", async () => {
  return false;
});

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
