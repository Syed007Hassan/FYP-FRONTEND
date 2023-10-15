// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';

export const updateEmployee = createAsyncThunk<
  void,
  { name: string, designation: string, phone: number, email: string; password: string, role: string, companyId: number },
  { rejectValue: string }
>(
  "/employer/create",
  async ({ name, email, password, phone, designation, role, companyId }, { rejectWithValue }) => {
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    //   console.log(name, email, password, phone, designation);
      await axios.post(
        `${Backend_URL}/employer/create`,
        { name, email, password, phone, designation, role, companyId },
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