import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/userApi";
import userReducer from "./services/updateUser/userSlice";
import employeeReducer from "./services/addEmployee/employeeSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    employeeReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
