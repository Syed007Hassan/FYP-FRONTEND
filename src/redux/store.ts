import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/Recruiter/recruiterAction";
import { companyApi } from "./services/Company/companyAction";
import { chatApi } from "./services/chat/chatAction";

import { userReducer } from "./services/Recruiter/recruiterSlice";
import { employeeReducer } from "./services/Recruiter/recruiterSlice";
import companyReducer from "./services/Company/companySlice";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    employeeReducer,
    companyReducer,
    [userApi.reducerPath]: userApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(companyApi.middleware)
  .concat(chatApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
