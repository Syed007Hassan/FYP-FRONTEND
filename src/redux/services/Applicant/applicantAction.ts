import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";
import { ApplicantDetailsApiResponse } from "@/types/applicant";
import { CreateApplicantDetails } from "@/types/applicant";

type updateApplicantDetailsArgs = {
  id: string;
  temp_data: CreateApplicantDetails;
};

export const updateApplicantDetails: any = createAsyncThunk(
  "user/updateApplicantDetails",
  async ({id, temp_data}: updateApplicantDetailsArgs) => {
    try {
      console.log("id: ", id);
      console.log("temp_datas: ", temp_data);
      const response = await axios.post(
        `${Backend_URL}/user/createApplicantDetails/${id}`,
        temp_data
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
export const resetSuccess = createAsyncThunk("/resetSuccess", async () => {
  return false;
});

export const ApplicantDetailApi = createApi({
  reducerPath: "ApplicantDetailApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${Backend_URL}/user/`,
  }),
  endpoints: (builder) => ({
    getApplicantDetails: builder.query<ApplicantDetailsApiResponse, { id: string }>({
      query: ({ id }) => `findApplicantDetails/${id}`,
    }),
  }),
});

export const { useGetApplicantDetailsQuery } = ApplicantDetailApi;
