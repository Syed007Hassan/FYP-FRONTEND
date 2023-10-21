"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { registerUser } from "@/redux/services/auth/authActions";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  const { loading, userInfo, error, success } = useAppSelector(
    (state) => state.authReducer
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    const name = firstName + " " + lastName;
    const role = "employer";
    const designation = "HR";
    const phone = parseInt(phoneNum);
    const data = {
      name,
      email,
      password,
      phone,
      companyName,
      role,
      designation,
    };

    if (password !== repeatPassword) {
      alert("Passwords do not match");
    }

    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    console.log(userInfo);
    // redirect("/");
    router.push("/login");
  };

  return (
    <div>
      <div className={`bg-blue-500 p-20`}>
        <Grid
          container
          component="main"
          sx={{
            height: "77.4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderEndStartRadius: "40px",
              borderTopLeftRadius: "40px",
              height: "80vh",
              paddingRight: "0px",
            }}
          />

          <Grid
            item
            xs={12}
            sm={8}
            md={3}
            component={Paper}
            elevation={6}
            square
            sx={{
              borderEndEndRadius: "40px",
              borderTopRightRadius: "40px",
              height: "81vh",
            }}
          >
            <Box
              sx={{
                my: 1,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up as a Recruiter
              </Typography>

              {success && (
                <Alert severity="success">User Registered Successfully</Alert>
              )}

          
              <div className="pt-3 container">
                <div className="mb-3 flex space-x-3">
                  <div>
                    <label htmlFor="f_name" className="block text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" 
                    id="f_name" 
                    className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="John" 
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
                  </div>
                  <div>
                    <label htmlFor="l_name" className="block text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" 
                    id="l_name" 
                    className="w-1/2  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    placeholder="Doe" 
                    onChange={(e) => setLastName(e.target.value)}
                    required />
                  </div>

                </div>

                <div className="mb-3">
                  <label htmlFor="company" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                  <input type="text" 
                  id="company" 
                  className="max-w-xs border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input type="phone" 
                  id="phone" 
                  className="max-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75" 
                  placeholder="123-45-678"
                   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                   onChange={(e) => setPhone(e.target.value)}
                   required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input 
                  type="email" 
                  id="email" 
                  className="max-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75" 
                  placeholder="john.doe@company.com" 
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                </div>


                <div className="flex space-x-3">
                  <div className="mb-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75" 
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="repeat_password" className="block text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                      type="password"
                      id="repeat_password"
                      className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required />
                  </div>
                </div>


                <div className="mb-0">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 sm:mb-0 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign Up ➔
                  </button>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block align-baseline sm:mt-0 mb-0 font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/login"
                  >
                    {"Already have an account? Sign In"}
                  </a>
                </div>

                <Copyright sx={{ mt: 0 }} className="text-xxs mt-0" />


              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
