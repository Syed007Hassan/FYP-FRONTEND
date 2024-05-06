// updateSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  updateApplicantDetails,
  resetSuccess,
  updateEducationDetails,
  updateExperienceDetails,
  updateSkillsAndAboutMe,
  updateProfileDetails,
  updateAboutInfo,
} from "./applicantAction";

const applicantSlice = createSlice({
  name: "update",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateApplicantDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateApplicantDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(resetSuccess.fulfilled, (state) => {
      state.success = false;
    });
    builder.addCase(updateEducationDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateEducationDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(updateExperienceDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateExperienceDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(updateSkillsAndAboutMe.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateSkillsAndAboutMe.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(updateProfileDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProfileDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addCase(updateAboutInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateAboutInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    });
    builder.addDefaultCase((state, action) => {
      state.success = false;
    });
  },
});

export default applicantSlice.reducer;
