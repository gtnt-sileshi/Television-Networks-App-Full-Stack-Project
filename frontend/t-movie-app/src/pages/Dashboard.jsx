// frontend/src/Dashboard.js
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, IconButton, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

const theme = createTheme();

const styles = {
  root: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    color: '#001F54',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    borderRight: '1px solid #ddd',
  },
  sidebarHeader: {
    marginBottom: theme.spacing(2),

    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    color: '#001F54',
    textDecoration: 'none',
  },
  navIcon: {
    marginRight: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: theme.spacing(3),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  userActions: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>
        <Box sx={styles.sidebar}>
          <Box sx={styles.sidebarHeader}>
            <img src="logo.png" alt="Logo" sx={{ }} style={{ width: '100px' }} />
            <Typography variant="h6" sx={{ marginTop: '20%', color: '#001F54' }}>T-Movie</Typography>
          </Box>
          <Link to="/dashboard" style={styles.navItem}>
            <DashboardIcon sx={styles.navIcon} />
            <Typography variant="h6">Dashboard</Typography>
          </Link>
          <Link to="/channel" style={styles.navItem}>
            <TvIcon sx={styles.navIcon} />
            <Typography variant="h6">Channel</Typography>
          </Link>
          <Link to="/program" style={styles.navItem}>
            <MovieIcon sx={styles.navIcon} />
            <Typography variant="h6">Program</Typography>
          </Link>
        </Box>
        <Box sx={styles.content}>
          <Box sx={styles.topBar}>
            <Typography variant="h4">Dashboard</Typography>
            <Box sx={styles.userActions}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Box>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                  <Box>
                    <Typography variant="h6">System User</Typography>
                    <Typography variant="body2" color="textSecondary">+12% This Month</Typography>
                  </Box>
                  <PersonIcon />
                  <Typography variant="h6">37</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                  <Box>
                    <Typography variant="h6">Program</Typography>
                    <Typography variant="body2" color="textSecondary">+12% This Month</Typography>
                  </Box>
                  <MovieIcon />
                  <Typography variant="h6">37</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                  <Box>
                    <Typography variant="h6">Channel</Typography>
                    <Typography variant="body2" color="textSecondary">+12% This Month</Typography>
                  </Box>
                  <TvIcon />
                  <Typography variant="h6">37</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Program on Category
            </Typography>
            <Box>
              {/* Placeholder for Pie Chart */}
              <img src="pie-chart.png" alt="Pie Chart" style={{ width: '100%' }} />
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Program with Type
            </Typography>
            <Box>
              {/* Placeholder for Line Chart */}
              <img src="line-chart.png" alt="Line Chart" style={{ width: '100%' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
