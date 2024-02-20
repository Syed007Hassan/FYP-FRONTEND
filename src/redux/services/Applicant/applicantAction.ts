import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";
import { ApplicantDetailsApiResponse } from "@/types/applicant";

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

type updateApplicantDetailsArgs = {
  id: string;
  temp_data: ApplicantDetails;
};

export const updateApplicantDetails: any = createAsyncThunk(
  "user/updateApplicantDetails",
  async ({id, temp_data}: updateApplicantDetailsArgs) => {
    try {
      console.log("id: ", id);
      console.log("temp_data: ", temp_data);
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

// export const updateApi = createApi({
//   reducerPath: "updateApi",
//   refetchOnFocus: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api/user/",
//   }),
//   endpoints: (builder) => ({
//     updateApplicantDetails: builder.mutation<any, ApplicantDetails>({
//       query: (details) => ({
//         url: `createApplicantDetails/${details}`,
//         method: "POST",
//         body: details,
//       }),
//     }),
//   }),
// });

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
