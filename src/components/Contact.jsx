import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import "./Contact.css"

const defaultTheme = createTheme();
const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 400px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  background: none;
  border: 1px solid rgba(54, 64, 73, 0.3);

  &::placeholder {
    color: White;
  }

  &:hover {
  }

  &:focus {
  }

  &:focus-visible {
    outline: 0;
  }

  &:placeholder': {
    color: white
  },
`,
);


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs" id="contact">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Contact Me
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 8 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className='contact_items'>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  id="firstName"
                  label="First Name"
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <Textarea 
              aria-label="minimum height" 
              minRows={3} 
              placeholder="Message" 
              required
                  />
                  
              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <button class="button-46" role="button">SEND</button>
            </div>
          </Box>
        </Box>
      </Container>
  );
}