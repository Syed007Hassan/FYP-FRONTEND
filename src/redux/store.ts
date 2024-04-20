import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/Recruiter/recruiterAction";
import { companyApi } from "./services/Company/companyAction";
import { chatApi } from "./services/chat/chatAction";
import { JobApi } from "./services/job/jobAction";
import { stageApi } from "./services/stage/stageAction";
import { assigneeApi } from "./services/assignee/assigneeAction";
import { ApplicantDetailApi } from "./services/Applicant/applicantAction";
import { ApplicationApi } from "./services/application/applicationAction";

import { userReducer } from "./services/Recruiter/recruiterSlice";
import { employeeReducer } from "./services/Recruiter/recruiterSlice";
import companyReducer from "./services/Company/companySlice";
import jobReducer from "./services/job/jobSlice";
import applicantReducer from "./services/Applicant/applicantSlice";
import stageReducer from "./services/stage/stageSlice";
import assigneeReducer from "./services/assignee/assigneeSlice";
import { resumeSummaryReducer } from "./services/chat/chatSlice";
import {applicationReducer, updateApplicationReducer, updateApplicationFeedbackReducer} from "./services/application/applicationSlice";
import { uploadCVReducer, uploadReducer, uploadCompanyProfileReducer} from "./services/upload/uploadSlice";

import sidebarReducer from "./features/sidebarStateAction";
export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    employeeReducer,
    companyReducer,
    jobReducer,
    stageReducer,
    assigneeReducer,
    applicantReducer,
    applicationReducer,
    updateApplicationReducer,
    uploadReducer,
    uploadCVReducer,
    uploadCompanyProfileReducer,
    resumeSummaryReducer,
    updateApplicationFeedbackReducer,
    [userApi.reducerPath]: userApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [JobApi.reducerPath]: JobApi.reducer,
    [stageApi.reducerPath]: stageApi.reducer,
    [assigneeApi.reducerPath]: assigneeApi.reducer,
    [ApplicantDetailApi.reducerPath]: ApplicantDetailApi.reducer,
    [ApplicationApi.reducerPath]: ApplicationApi.reducer,
    sidebar: sidebarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(companyApi.middleware)
      .concat(chatApi.middleware)
      .concat(JobApi.middleware)
      .concat(stageApi.middleware)
      .concat(assigneeApi.middleware)
      .concat(ApplicantDetailApi.middleware)
      .concat(ApplicationApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
