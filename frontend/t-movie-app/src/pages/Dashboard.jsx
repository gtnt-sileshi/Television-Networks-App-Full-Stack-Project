import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { PieChart, LineChart } from "@mui/x-charts";

const theme = createTheme({
  typography: {
    htmlFontSize: 20, // Adjust the base font size to 20px (125% of the default 16px)
  },
});

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    flexGrow: "auto",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff",
    color: "#001F54",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    borderRight: "1px solid #ddd",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    borderBottom: "1px solid #ddd",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2, 0),
    color: "#001F54",
    textDecoration: "none",
  },
  navIcon: {
    marginRight: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    overflowY: "auto",
    padding: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
  },
  userActions: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>
        <Box sx={styles.sidebar}>
          <Box sx={styles.sidebarHeader}>
            <img src="logo.png" alt="Logo" style={{ width: "100px" }} />
            <Typography variant="h6" sx={{ color: "#001F54", marginLeft: theme.spacing(1) }}>
              T-Movie
            </Typography>
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
          <Box sx={styles.header}>
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
                    <Typography variant="body2" color="textSecondary">
                      +12% This Month
                    </Typography>
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
                    <Typography variant="body2" color="textSecondary">
                      +12% This Month
                    </Typography>
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
                    <Typography variant="body2" color="textSecondary">
                      +12% This Month
                    </Typography>
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
              <PieChart
                series={[
                  {
                    data: [
                      { category: "Action", value: 25 },
                      { category: "Comedy", value: 40 },
                      { category: "Drama", value: 20 },
                      { category: "Thriller", value: 15 },
                    ],
                  },
                ]}
                height={400}
                width={600}
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Program with Type
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
