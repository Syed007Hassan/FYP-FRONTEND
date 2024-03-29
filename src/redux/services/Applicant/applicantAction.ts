import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";
import { ApplicantDetailsApiResponse } from "@/types/applicant";
import {
  CreateApplicantDetails,
  Education,
  Experience,
  Contact,
  AboutInfoData,
} from "@/types/applicant";
import { JobApplicationResponse } from "@/types/job";
import { ApplicationCount } from "@/types/company";

type updateApplicantDetailsArgs = {
  id: string;
  temp_data: CreateApplicantDetails;
};

type updateEducationDetailsArgs = {
  id: string;
  education: Education[];
};

type updateExperienceDetailsArgs = {
  id: string;
  experience: Experience[];
};

type updateAboutInfoArgs = {
  id: string;
  temp_data: AboutInfoData;
};

type updatePersonalDetailsArgs = {
  id: string;
  contact: Contact;
};

export const updateApplicantDetails: any = createAsyncThunk(
  "user/updateApplicantDetails",
  async ({ id, temp_data }: updateApplicantDetailsArgs) => {
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

export const updateEducationDetails: any = createAsyncThunk(
  "user/updateEducationDetails",
  async ({ id, education }: updateEducationDetailsArgs) => {
    const data = {
      education: education,
    };
    try {
      const response = await axios.patch(
        `${Backend_URL}/user/updateEducationDetails/${id}`,
        data
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateExperienceDetails: any = createAsyncThunk(
  "user/updateExperienceDetails",
  async ({ id, experience }: updateExperienceDetailsArgs) => {
    const temp_data = {
      experience: experience,
    };
    try {
      const response = await axios.patch(
        `${Backend_URL}/user/updateExperienceDetails/${id}`,
        temp_data
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateSkillsAndAboutMe: any = createAsyncThunk(
  "user/updateSkills",
  async ({ id, temp_data }: updateApplicantDetailsArgs) => {
    try {
      const response = await axios.patch(
        `${Backend_URL}/user/updateSkills/${id}`,
        temp_data
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateProfileDetails: any = createAsyncThunk(
  "user/updateProfileDetails",
  async ({ id, contact }: updatePersonalDetailsArgs) => {
    try {
      const response = await axios.patch(
        `${Backend_URL}/user/updateContactDetails/${id}`,
        contact
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateAboutInfo = createAsyncThunk(
  "user/updateAboutInfo",
  async ({ id, temp_data }: updateAboutInfoArgs) => {
    try {
      const response = await axios.patch(
        `${Backend_URL}/user/updateSkillDetails/${id}`,
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
    getApplicantDetails: builder.query<
      ApplicantDetailsApiResponse,
      { id: string }
    >({
      query: ({ id }) => `findApplicantDetails/${id}`,
    }),
    findAllJobApplicationsByApprovedStatusCount: builder.query<
      any,
      { id: string }
    >({
      query: ({ id }) => `findAllJobApplicationsByStatusCount/${id}/approved`,
    }),
    findAllJobApplicationsByPendingStatusCount: builder.query<
      any,
      { id: string }
    >({
      query: ({ id }) => `findAllJobApplicationsByStatusCount/${id}/pending`,
    }),
    findAllJobApplicationsByRejectedStatusCount: builder.query<
      any,
      { id: string }
    >({
      query: ({ id }) => `findAllJobApplicationsByStatusCount/${id}/rejected`,
    }),
    findAllJobApplicationsCount: builder.query<any, { id: string }>({
      query: ({ id }) => `findAllJobApplicationsCount/${id}`,
    }),
    findAllJobApplicationsByMonth: builder.query<
      ApplicationCount,
      { id: string }
    >({
      query: ({ id }) => `findAllJobApplicationsByMonth/${id}`,
    }),
    findRecentJobApplicationsWithFeedback: builder.query<
      JobApplicationResponse,
      { id: string }
    >({
      query: ({ id }) => `findRecentJobApplicationsWithFeedback/${id}`,
    }),
  }),
});

export const {
  useGetApplicantDetailsQuery,
  useFindAllJobApplicationsByApprovedStatusCountQuery,
  useFindAllJobApplicationsByPendingStatusCountQuery,
  useFindAllJobApplicationsByRejectedStatusCountQuery,
  useFindAllJobApplicationsByMonthQuery,
  useFindAllJobApplicationsCountQuery,
  useFindRecentJobApplicationsWithFeedbackQuery,
} = ApplicantDetailApi;
