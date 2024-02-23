"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn, getSession } from "next-auth/react";
import styles from "./login.module.css";
import Header from "@/components/Header";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginApplicant, resetReject } from "@/redux/services/auth/authActions";
import { RootState } from "@/redux/store";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, userInfo, error, success, reject } = useAppSelector(
    (state: RootState) => state.authReducer
  );

  const handleSubmit = async (event: any) => {
    console.log(email, password);
    try {
      // const result = await signIn("credentials", {
      //   email: email,
      //   password: password,
      //   redirect: true,
      //   callbackUrl: "/dashboard",
      // });

      // apply axios here
      // const result = await axios.post(`${Backend_URL}/auth/loginRecruiter`, {
      //   email: email,
      //   password: password,
      //   role: "employer",
      // });

      dispatch(
        loginApplicant({ email: email, password: password, role: "employee" })
      );

      // console.log(result?.data?.data?.jwt);

      // Cookies.set('token', result?.data?.data?.jwt, { expires: 7 });
      // console.log(Cookies.get('token'));

      // const session = await getSession();
      // console.log("session: ",session);

      // Router.push('/recruiter');

      // if (session) {
      //   setResult(true);
      //   setAlertMessage("User Logged In Successfully!");
      // } else {
      //   setResult(false);
      //   setAlertMessage("User Not Logged In!");
      // }
    } catch (error) {
      setResult(false);
      setAlertMessage("User Not Logged In!");
    }

    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);
  };

  const handleOauth = async (event: any) => {
    event.preventDefault();

    window.location.href = `${Backend_URL}/auth/google/callback`;
  };

  useEffect(() => {
    console.log("userInfo", userInfo);
    if (userInfo?.success) {
      setAlertMessage("User Logged In Successfully!");
      console.log("userInfo", userInfo);
      Cookies.set("token", userInfo?.data?.jwt, { expires: 7 });
      Router.push("/applicant");
    }
  }, [userInfo, dispatch, Router]);

  useEffect(() => {
    if (reject) {
      setAlertMessage("User Not Logged In!");
      dispatch(resetReject());
    }
  }, [reject, dispatch]);

  const showPassword = () => {
    var isCheck = document.getElementById("password");
    if (isCheck!.getAttribute("type") === "password") {
      isCheck!.setAttribute("type", "text");
    } else {
      isCheck!.setAttribute("type", "password");
    }
  };

  return (
    // include Header Component here

    <div className="min-h-screen justify-center">
      <Header />
      <div className="relative">
        {!result && (
          <div
            className={`p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 absolute top-4 right-4 transform -translate-y-3/2 z-20 transition-opacity duration-2000 ${
              !alertMessage && "opacity-0"
            }`}
            role="alert"
          >
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              {alertMessage}
            </p>
          </div>
        )}
      </div>
      <div className={`bg-blue-500 p-6`}>
        <Grid
          container
          component="main"
          sx={{
            // height: "77.4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={15}
            sm={4}
            md={6}
            sx={{
              backgroundImage: "url(/sign-in.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "dark"
                  ? t.palette.grey[50]
                  : t.palette.grey[100],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderEndStartRadius: "40px",
              borderTopLeftRadius: "40px",
              height: "83.4vh",
              paddingRight: "0px",
            }}
            className="hidden md:flex"
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={3}
            component={Paper}
            elevation={6}
            square
            sx={
              {
                // borderEndEndRadius: "40px",
                // borderTopRightRadius: "40px",
                // height: "80vh",
              }
            }
            className="rounded md:rounded-tl-none md:rounded-bl-none md:rounded-tr-[40px] md:rounded-br-[40px] md:h-[83vh]"
          >
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <div>
                <h1 className="font-bold text-2xl mb-0">
                  Login As An Applicant
                </h1>
              </div>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ m: 2 }}
              >
                <div className="pt-3 grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="john.doe@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4 mt-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-4"
                      onClick={showPassword}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Show Password
                    </span>
                  </label>
                </div>

                <div className="mb-4 mt-3">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign In ➔
                  </button>
                </div>

                <div className="mb-4 mt-3">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleOauth}
                  >
                    Sign In With Google ➔
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>
                    Don&apos;t have an account?{" "}
                    <a
                      href="/signup"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
