// frontend/src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';

// import { makeStyles } from '@mui/system';
import { unstable_styleFunctionSx } from '@mui/system';
// import { createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import styled, { ThemeProvider } from 'styled-components';



import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

// const theme = createTheme();

// const Div = styled('div')(unstable_styleFunctionSx);


  const styles = {
    root: {
      height: '100vh',
      display: 'flex',
    },
    imageContainer: {
      width: '50%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    logo: {
      color: '#61dafb',
      fontSize: '4rem',
      // marginBottom: theme.spacing(2),
    },
    image: {
      width: '150px',
      // marginBottom: theme.spacing(2),
    },
    formContainer: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      // padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textField: {
      // margin: theme.spacing(2, 0),
    },
    button: {
      // margin: theme.spacing(3, 0, 2),
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    inputIcon: {
      // marginRight: theme.spacing(1),
    },
  }

  function Login({ onLogin }) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
      event.preventDefault();
      navigate.push('/dashboard');
      if (onLogin) {
        onLogin(phoneNumber, password);
      }
    };
  
    return (
      <Box>
      <div sx={styles.root}>
        <div sx={styles.imageContainer}>
          <img src="/logo.png" alt="Logo" sx={styles.image} />
          <Typography variant="h4" sx={styles.logo}>
            T-Movie
          </Typography>
        </div>
        <div sx={styles.formContainer}>
          <Container component="main" maxWidth="xs">
            <div sx={styles.form}>
              <Typography variant="h4">Login</Typography>
              <form onSubmit={handleLogin}>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle sx={styles.inputIcon} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      sx={styles.textField}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item>
                    <LockIcon sx={styles.inputIcon} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={styles.textField}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={styles.button}
                >
                  Login
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
      </Box>
      // <p>Hello, this is a test!</p>
      
    );

}

export default Login;
