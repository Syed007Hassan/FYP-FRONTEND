// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from '@/types/recruiter';

type Recruiter = {
  data: {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    designation: string;
    role: string;
    companyId: number;
  };
};


export const createEmployee = createAsyncThunk<
  void,
  { name: string, designation: string, phone: string, email: string; password: string, role: string, companyId: number },
  { rejectValue: string }
>(
  "/auth/registerCompanyEmployee",
  async ({ name, email, password, phone, designation, role, companyId }, { rejectWithValue }) => {
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    //   console.log(name, email, password, phone, designation);
      await axios.post(
        `${Backend_URL}/auth/registerCompanyEmployee?companyId=${companyId}`,
        { name, email, password, phone, designation, role},
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
  { name: string; email: string; password: string, phone: number, designation: string },
  { rejectValue: string }
>(
  "/employer/updateRecruiter",
  async ({ name, email, password, phone, designation }, { rejectWithValue }) => {
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(name, email, password, phone, designation);
      await axios.patch(
        `${Backend_URL}/employer/updateRecruiter`,
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
    baseUrl: "http://localhost:5000/api/recruiter/",
  }),
  endpoints: (builder) => ({
    getUserByEmail: builder.query<Recruiter, { email: string }>({
      query: ({ email }) => `findOneByEmail/${email}`,
    }),
    getUsers: builder.query<ApiResponse, void>({
      query: () => `findAll`,
    }),
  }),
});

export const { useGetUserByEmailQuery, useGetUsersQuery } = userApi;