import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";

type uploadProfileImageArgs = {
  id: string;
  image: File;
};

type uploadResumeArgs = {
  id: string;
  resume: File;
};

export const uploadProfileImage: any = createAsyncThunk(
  "user/uploadProfileImage",
  async ({ id, image }: uploadProfileImageArgs) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      const response = await axios.post(
        `${Backend_URL}/upload/${id}/profilePicture`,
        formData
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const uploadResume: any = createAsyncThunk(
  "user/uploadResume",
  async ({ id, resume }: uploadResumeArgs) => {
    try {
      console.log("resume", resume);
      const formData = new FormData();
      formData.append("file", resume);
      console.log(formData);
      const response = await axios.post(
        `${Backend_URL}/upload/${id}/resume`,
        formData
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
