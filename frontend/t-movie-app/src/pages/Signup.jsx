import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { userSchema } from '../validation';

const theme = createTheme();

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '1600px',
    height: '90%',
    // border: '2px solid #000',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  imageContainer: {
    width: '50%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  logo: {
    color: '#ffffff',
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  image: {
    width: '200px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  formContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#001F54',
    color: 'white',
    '&:hover': {
      backgroundColor: '#001F54',
    },
  },
  signupLink: {
    marginTop: theme.spacing(2),
  },
};

function Signup({ onSignup }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    const formData = { phoneNumber, password, confirmPassword };
    const result = userSchema.safeParse(formData);

    if (result.success) {
      navigate('/dashboard');
      if (onSignup) {
        onSignup(phoneNumber, password);
      }
    } else {
      const newErrors = {};
      result.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
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
                  SIGN UP
                </Typography>
                <form onSubmit={handleSignup}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
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
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={styles.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
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
                    Sign Up
                  </Button>
                </form>
                <Typography sx={styles.signupLink}>
                  Already have an account? <Link to="/">Please login</Link>
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Signup;
