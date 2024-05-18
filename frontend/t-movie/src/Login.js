// frontend/src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's just navigate to a different page upon login
    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
    <div>
    <Typography variant="h4">Login</Typography>
    <form onSubmit={handleLogin}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" color="primary">
        Login
      </Button>
    </form>
  </div>
  </Container>
  );
}

export default Login;
