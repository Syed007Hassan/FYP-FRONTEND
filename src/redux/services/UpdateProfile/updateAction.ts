import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";

type ApplicantDetails = {
  dob: string;
  gender: string;
  aboutMe: string;
  education: {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
  }[];
  skills: string[];
  location: {
    area: string;
    city: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  experience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  relocation: boolean;
  resume: string;
  languages: string;
};

export const updateApplicantDetails: any = createAsyncThunk(
  "user/updateApplicantDetails",
  async (applicantDetails: ApplicantDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Backend_URL}/api/user/createApplicantDetails/${applicantDetails}`,
        applicantDetails
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const resetSuccess = createAsyncThunk("/resetSuccess", async () => {
  return false;
});

export const updateApi = createApi({
  reducerPath: "updateApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/user/",
  }),
  endpoints: (builder) => ({
    updateApplicantDetails: builder.mutation<any, ApplicantDetails>({
      query: (details) => ({
        url: `createApplicantDetails/${details}`,
        method: "POST",
        body: details,
      }),
    }),
  }),
});

export const { useUpdateApplicantDetailsMutation } = updateApi;
