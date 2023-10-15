import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";

type Company = {

};

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