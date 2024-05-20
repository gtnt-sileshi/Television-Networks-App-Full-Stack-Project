// frontend/src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid, Box, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const theme = createTheme();

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    width: '1200px',
    height: '80%',
    border: '2px solid #000', // Border for enclosing the content
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
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
    color: '#ffffff',
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
  image: {
    width: '150px',
    marginBottom: theme.spacing(2),
  },
  formContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#001F54', // Dark blue color for the button
    color: 'white',
    '&:hover': {
      backgroundColor: '#001F54',
    },
  },
};

function Login({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
    if (onLogin) {
      onLogin(phoneNumber, password);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>
        <Box sx={styles.container}>
          <Box sx={styles.imageContainer}>
            <img src="logo.png" alt="Logo" style={styles.image} />
            <Typography variant="h4" sx={styles.logo}>
              T-Movie
            </Typography>
          </Box>
          <Box sx={styles.formContainer}>
            <Container component="main" maxWidth="xs">
              <Box sx={styles.form}>
                <Typography variant="h4" gutterBottom>
                  LOGIN
                </Typography>
                <form onSubmit={handleLogin}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    sx={styles.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={styles.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.button}
                  >
                    Login
                  </Button>
                </form>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
