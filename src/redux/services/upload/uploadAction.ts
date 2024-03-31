import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";

type uploadProfileImageArgs = {
  id: string;
  image: File;
  token: string;
};

type uploadResumeArgs = {
  id: string;
  resume: File;
  token: string;
};

type uploadCompanyProfileArgs = {
  companyId: string;
  picture: File;
  token: string;
};

export const uploadProfileImage: any = createAsyncThunk(
  "user/uploadProfileImage",
  async ({ id, image, token }: uploadProfileImageArgs) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = new FormData();
      formData.append("file", image);
      const response = await axios.post(
        `${Backend_URL}/upload/${id}/profilePicture`,
        formData,
        config
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const uploadResume: any = createAsyncThunk(
  "user/uploadResume",
  async ({ id, resume, token }: uploadResumeArgs) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log("resume", resume);
      const formData = new FormData();
      formData.append("file", resume);
      // console.log(formData);
      const response = await axios.post(
        `${Backend_URL}/upload/${id}/resume`,
        formData,
        config
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const uploadCompanyProfile = createAsyncThunk(
  "company/uploadCompanyProfile",
  async ({ companyId, picture, token }: uploadCompanyProfileArgs) => {
    try {
      // console.log("picture", picture);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = new FormData();
      formData.append("file", picture);
      // console.log(formData);
      const response = await axios.post(
        `${Backend_URL}/upload/${companyId}/companyProfilePicture`,
        formData,
        config
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
