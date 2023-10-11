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

            <Box component="form" noValidate onSubmit={handleSubmit}sx={{ mt: 1, width: '70%', maxWidth: '400px' ,height : '300px'}} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              />

              {/* // create for first name  */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              {/* // create for last name  */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              {/*create for company name  */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                autoComplete="companyName"
                autoFocus
              />
              {/* create for company size  */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="companySize"
                label="Company Size"
                name="companySize"
                autoComplete="companySize"
                autoFocus
              />
              {/* create for company website  */}


              <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 my-3 px-4 rounded-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Show Demo ➔
              </button>
              
              <Copyright sx={{ mt: 1}} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}