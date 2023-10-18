// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Company = {
  data: {
    id: number;
    companyName: string;
    companyEmail: string;
    companyWebsite: string;
    companyAddress: string;
    companyPhone: number;
  };
};

export const updateCompany = createAsyncThunk<
  void,
  { companyId: number,companyName: string, companyAddress: string, companyPhone: number, companyEmail: string; companyWebsite: string },
  { rejectValue: string }
>(
  "/company/updateCompanyById",
  async ({ companyId ,companyName, companyEmail, companyPhone, companyAddress, companyWebsite}, { rejectWithValue }) => {
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    //   console.log(name, email, password, phone, designation);
      await axios.patch(
        `${Backend_URL}/company/updateCompanyById/${companyId}`,
        {companyName ,companyEmail, companyWebsite, companyAddress, companyPhone },
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

export const companyApi = createApi({
  reducerPath: "companyApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/company/",
  }),
  endpoints: (builder) => ({
    getCompany: builder.query<Company, { id: number }>({
      query: ({ id }) => `findOne/${id}`,
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;