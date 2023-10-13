// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';
import { getSession } from 'next-auth/react';

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