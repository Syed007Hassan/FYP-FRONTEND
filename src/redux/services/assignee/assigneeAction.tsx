import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stage, Workflow, Assignee, newAssignee } from "@/types/assign";

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

const assigneeApi = createApi({
    reducerPath: "assigneeApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/assignee/",
    }),
    endpoints: (builder) => ({
        getAssignee: builder.query<Stage, { id: string }>({
            query: ({ id }) => `findByStageId/${id}`,
        }),
    }),
});