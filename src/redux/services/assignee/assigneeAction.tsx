import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stage, Workflow, Assignee, newAssignee, GetApiResponse } from "@/types/assign";

type CreateStageArgs = {
    stageId: string;
    workflowId: string;
    assignees: newAssignee;
};

export const addAssignee = createAsyncThunk(
    "workflow/assignStage",
    async ({ stageId, workflowId, assignees }: CreateStageArgs) => {
        const response = await axios.post(
            `${Backend_URL}/workflow/assignStage/${workflowId}/${stageId}`,
            assignees
        );
        return response.data;
    }
);

export const assigneeApi = createApi({
    reducerPath: "assigneeApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:5000/api/workflow/",
        baseUrl: `${Backend_URL}/workflow/`,
    }),
    endpoints: (builder) => ({
        getAssignee: builder.query<GetApiResponse, { stageId: string, workflowId: string, trigger: number }>({
            query: ({ stageId, workflowId }) => `findAssignedStage/${workflowId}/${stageId}`,
        }),
    }),
});

// change success value
export const resetSuccess = createAsyncThunk("workflow/resetSuccess", async () => {
    return false;
});

export const { useGetAssigneeQuery } = assigneeApi;