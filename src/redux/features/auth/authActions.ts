// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';

export const registerUser = createAsyncThunk<
  void,
  { name: string; email: string; password: string, role: string },
  { rejectValue: string }
>(
  "auth/register",
  async ({ name, email, password, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${Backend_URL}/auth/register`,
        { name, email, password, role },
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