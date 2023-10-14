import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "@/lib/Constants";

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    companyName: string;
    role: string;
    designation: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/employer/",
  }),
  endpoints: (builder) => ({
    getUserByEmail: builder.query<User, { email: string }>({
      query: ({ email }) => `findOneByEmail/${email}`,
    }),
  }),
});

export const { useGetUserByEmailQuery } = userApi;