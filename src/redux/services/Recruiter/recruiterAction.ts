// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Backend_URL } from "@/lib/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, StageResponse } from "@/types/recruiter";
import { UpdateRecruiter } from "@/types/recruiter";
import Company from "@/types/company";

type Recruiter = {
  data: {
    recruiterId: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    designation: string;
    role: string;
    company: Company;
  };
};

export const createEmployee = createAsyncThunk<
  void,
  {
    name: string;
    designation: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    companyId: number;
    token: string;
  },
  { rejectValue: string }
>(
  "/auth/registerCompanyEmployee",
  async (
    { name, email, password, phone, designation, role, companyId, token },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      //   console.log(name, email, password, phone, designation);
      await axios.post(
        `${Backend_URL}/auth/registerCompanyEmployee/${companyId}`,
        { name, email, password, phone, designation, role },
        config
      );
    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const updateUser = createAsyncThunk<
  void,
  {
    name: string;
    email: string;
    password: string;
    phone: number;
    designation: string;
    token: string;
  },
  { rejectValue: string }
>(
  "/recruiter/updateRecruiter",
  async (
    { name, email, password, phone, designation, token },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log(name, email, password, phone, designation);
      await axios.patch(
        `${Backend_URL}/recruiter/updateRecruiter`,
        { name, email, password, phone, designation },
        config
      );
    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/recruiter/",
    baseUrl: `${Backend_URL}/recruiter/`,
  }),
  endpoints: (builder) => ({
    getUserByEmail: builder.query<Recruiter, { email: string }>({
      query: ({ email }) => `findOneByEmail/${email}`,
    }),
    getUsers: builder.query<ApiResponse, { companyId: string }>({
      query: ({ companyId }) => `findByCompanyId/${companyId}`,
    }),
    getUserById: builder.query<Recruiter, { recruiterId: number }>({
      query: ({ recruiterId }) => `findOne/${recruiterId}`,
    }),
    getAllStagesAssigned: builder.query<StageResponse, { recruiterId: string }>(
      {
        query: ({ recruiterId }) =>
          `findAllTheStagesAssignedToRecruiter/${recruiterId}`,
      }
    ),
  }),
});

export const DeleteRegisteredEmployee = createAsyncThunk<
  void,
  { recruiterId: string; employeeId: string, token: string }
>(
  "/recruiter/deleteRegisteredEmployee",
  async ({ recruiterId, employeeId, token }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `${Backend_URL}/recruiter/deleteRegisteredEmployee/${recruiterId}/${employeeId}`,
        config
      );
    } catch (error: any) {
      // return custom error message from backend if presen
    }
  }
);

export const UpdateRegisteredEmployee = createAsyncThunk(
  "/recruiter/updateRegisteredEmployee",
  async ({ recruiterId, employeeId, temp_data, token }: UpdateRecruiter) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log("temp_data", temp_data);
      // console.log("recruiterId", recruiterId);
      // console.log("employeeId", employeeId);

      await axios.patch(
        `${Backend_URL}/recruiter/updateRegisteredEmployee/${recruiterId}/${employeeId}`,
        temp_data,
        config
      );
    } catch (error: any) {
      console.log("Error is", error.message);
    }
  }
);

export const {
  useGetUserByEmailQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetAllStagesAssignedQuery,
} = userApi;
