// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Backend_URL } from '@/lib/Constants';

export const registerUser = createAsyncThunk<
  void,
  { name: string; email: string; password: string, phone: string, companyName: string, role: string, designation: string },
  { rejectValue: string }
>(
  "/auth/registerRecruiter",
  async ({ name, email, password, phone, companyName, role, designation }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // console.log(name, email, password, phone, companyName, role);

      await axios.post(
        `${Backend_URL}/auth/registerRecruiter`,
        { name, email, password, phone, companyName ,role, designation },
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

export const loginUser = createAsyncThunk<
  void,
  { email: string; password: string; role: string },
  { rejectValue: string }
>(
  "/auth/loginRecruiter",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${Backend_URL}/auth/loginRecruiter`,
        { email, password, role },
        config
      );

      return response.data;
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

export const registerApplicant = createAsyncThunk<
  void,
  { name: string; email: string; password: string, role: string},
  { rejectValue: string }
>(
  "/auth/registerApplicant",
  async ({ name, email, password, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // console.log(name, email, password, phone, companyName, role);

      await axios.post(
        `${Backend_URL}/auth/registerApplicant`,
        { name, email, password, role},
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

export const loginApplicant = createAsyncThunk<
  void,
  { email: string; password: string; role: string },
  { rejectValue: string }
>(
  "/auth/loginApplicant",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${Backend_URL}/auth/loginApplicant`,
        { email, password, role },
        config
      );

      return response.data;
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

export const resetSuccess = createAsyncThunk("login/resetSuccess", async () => {
  return false;
});

export const resetReject = createAsyncThunk("login/resetReject", async () => {
  return false;
});