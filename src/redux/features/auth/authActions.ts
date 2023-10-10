// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';

export const registerUser = createAsyncThunk<
  void,
  { name: string; email: string; password: string, phone: number, companyName: string, role: string },
  { rejectValue: string }
>(
  "/auth/registerEmployer",
  async ({ name, email, password, phone, companyName, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(name, email, password, phone, companyName, role);

      await axios.post(
        `${Backend_URL}/auth/registerEmployer`,
        { name, email, password, phone, companyName ,role },
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