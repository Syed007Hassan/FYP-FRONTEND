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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  useEffect(() => {
    // ... other code ...
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // ... other code ...
  
    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  
  return (
    // include Header Component here
    
<div>
  <Header />

<div className={`bg-blue-500 p-20 text-center sm:text-left`} >
      <Grid container component="main" sx={{ height: "77.4vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CssBaseline />
        {windowWidth >= 768 ? ( 
        <Grid
          item
          xs={12}
          sm={12} // Full width on small screens
          md={6} // Half width on medium screens
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
        /> ): null }
        
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square 
            sx={{borderEndEndRadius: '40px', borderTopRightRadius: '40px', height: "80vh"}}>
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
            <Typography component="h1" variant="h5">
              Login As A Recruiter
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ m:2 }}
            >
              <div className="">
                <div className="mb-4">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-4 mt-3">
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
              </div>

              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    
    </div>
</div>
   
  );
}