"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { registerUser } from "@/redux/features/auth/authActions";
import { redirect } from 'next/navigation';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { loading, userInfo, error, success } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch()

  const handleSubmit = (event: any) => {
    console.log("handleSubmit");
    event.preventDefault();
    const name = firstName + " " + lastName;
    const role = "employee";
    const data = { name, email, password, role };
    console.log(data);

    if(password !== repeatPassword) {
      alert("Passwords do not match");
    }

    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    redirect("/login");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up as a Recruiter
            </Typography>
    
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="text"
                    placeholder="Company"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <div className="flex">
                    <input
                      className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      type="text"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeatPassword">
                      Repeat Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="repeatPassword"
                      type="password"
                      placeholder="Repeat Password"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-4 mt-3">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign Up ➔
                  </button>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/login"
                  >
                    {"Already have an account? Sign In"}
                  </a>
                </div>
              </div>
              <Copyright sx={{ mt: 2 }} />
            </Box>


          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
