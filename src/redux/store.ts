import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/User/getUserApi";
import { companyApi } from "./services/Company/getCompanyApi";

import userReducer from "./services/User/userSlice";
import employeeReducer from "./services/Employee/employeeSlice";
import companyReducer from "./services/Company/companySlice";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    employeeReducer,
    companyReducer,
    [userApi.reducerPath]: userApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(companyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
