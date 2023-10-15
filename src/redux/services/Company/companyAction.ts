// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';

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