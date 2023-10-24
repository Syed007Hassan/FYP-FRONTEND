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
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import Header from "@/components/Header";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

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

    <div>
      <Header />
      <div className={`bg-blue-500 p-20`} >
        <Grid container component="main" sx={{ height: "77.4vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CssBaseline />
          <Grid
            item
            xs={15}
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
              borderEndStartRadius: '40px', borderTopLeftRadius: '40px',
              height: "80vh",
              paddingRight: "0px",
            }}
          />
          <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square
            sx={{ borderEndEndRadius: '40px', borderTopRightRadius: '40px', height: "80vh" }}>
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
                <h1 className="font-bold text-2xl mb-0">Login As A Recruiter</h1>
              </div>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ m: 2 }}
              >
                <div className="pt-3 grid grid-cols-1 gap-4">

                  <div className="mb-4">
                    <label htmlFor="email" className="mb-1 block text-sm font-bold text-gray-900 dark:text-white">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="john.doe@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Password :</label>
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
                <div className="mb-2 mt-3">
                  <input type="checkbox" onClick={showPassword} /> Show Password
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