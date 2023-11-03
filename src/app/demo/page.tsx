"use client"
import * as React from 'react';
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
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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

export default function Demo() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      firstName: data.get('firstName'),

    });
  };

  return (
    <div>

      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>

          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className="px-10 py-10 ">
            <Box>
              <Typography variant="h4">Get A Demo of SyncFlow</Typography>
              {/* Other content within the Box */}
              From recruiting through onboarding, Greenhouse gives your company everything you need to be great at hiring.

              Here’s what you can expect when you request a Greenhouse demo.
            </Box>
          </Grid>

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

              {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '70%', maxWidth: '400px', height: '300px' }} > */}
              <div className='container pb-3 y-space-3'>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-900 dark:text-white">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="mb-4 w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  placeholder="john.doe@company.com"
                  required />

                {/* // create for first name  */}

                <label htmlFor="firstName" className="mb-2 block text-sm font-bold text-gray-900 dark:text-white">First name</label>
                <input type="text"
                  id="firstName"
                  className="mb-4 w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  placeholder="John"
                  required />
                {/* // create for last name  */}
                <label htmlFor="lastName" className="mb-2 block text-sm font-bold text-gray-900 dark:text-white">Last name</label>
                <input type="text"
                  id="lastName"
                  className="mb-4 w-full  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  placeholder="Doe"
                  required />

                {/*create for company name  */}

                <label htmlFor="companyName" className="mb-2 block mt-2 text-sm font-bold text-gray-900 dark:text-white">Company Name</label>
                <input type="text"
                  id="companyName"
                  className="mb-4 w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  required
                />
                <label htmlFor="companySize" className="mb-2 block mt-2 text-sm font-bold text-gray-900 dark:text-white">Company Size</label>
                <input type="text"
                  id="companySize"
                  className="mb-4 w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                  required
                />


                <button
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 my-3 px-4 rounded-full"
                  type="button"
                  onClick={handleSubmit}
                >
                  Show Demo ➔
                </button>

                <Copyright sx={{ mt: 1 }} />

              </div>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>

    </div>
  );
}