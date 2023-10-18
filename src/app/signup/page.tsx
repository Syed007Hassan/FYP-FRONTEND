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
import { registerUser } from "@/redux/services/auth/authActions";
import { redirect } from 'next/navigation';
import Header from "@/components/Header";
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';

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
  const [companyName, setCompanyName] = useState('');
  const [phoneNum, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const router = useRouter();

  const { loading, userInfo, error, success } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch()

  const handleSubmit = (event: any) => {
    const name = firstName + " " + lastName;
    const role = "employer";
    const designation = "HR";
    const phone = parseInt(phoneNum);
    const data = { name, email, password, phone, companyName ,role, designation };

    if(password !== repeatPassword) {
      alert("Passwords do not match");
    }

    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    console.log(userInfo);
    // redirect("/");
    router.push("/login");
  }

  return (
    <div>
    <Header />
    
    <div className={`bg-blue-500 p-20`} >
      <Grid container component="main" sx={{ height: "77.4vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderEndStartRadius: '40px', borderTopLeftRadius: '40px',
            height: "80vh",
            paddingRight: "0px",
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square sx={{borderEndEndRadius: '40px', borderTopRightRadius: '40px', height: "80vh"}}>
          <Box
            sx={{
              my: 1,
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

            {success && <Alert severity="success">User Registered Successfully</Alert>}
    
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m:1}}>
            <div className="">
                <div className="mb-4 flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="f_name"
                    label="First Name"
                    name="f_name"
                    autoComplete="first_name"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="l_name"
                    label="Last Name"
                    name="l_name"
                    autoComplete="last_name"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="company"
                    label="Company Name"
                    name="company"
                    autoComplete="company"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                </div>
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
                <div className="mb-4 flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type='password'
                    name="password"
                    autoComplete="password"
                    autoFocus
                    variant="outlined"
                    size="small"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="repeat_password"
                    label="Repeat Password"
                    type='password'
                    name="repeat_password"
                    autoComplete="repeat_password"
                    autoFocus
                    variant="outlined"
                    size="small"
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
    </div>
    </div>
  );
}