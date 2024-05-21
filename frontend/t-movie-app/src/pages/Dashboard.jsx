import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import FilterIcon from "@mui/icons-material/FilterList";
import { PieChart, LineChart } from "@mui/x-charts";

const theme = createTheme({
  typography: {
    htmlFontSize: 20, // Adjust the base font size to 20px (125% of the default 16px)
  },
});

const navbarHeight = "60px"; // Define a common height for the top navbar

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    flexGrow: "auto",
  },
  navbar: {
    display: "flex",
    width: "100%", // Full width
    justifyContent: "space-between",
    alignItems: "center",
    height: navbarHeight,
    backgroundColor: "#001F54",
    color: "#fff",
  },
  navbarLeft: {
    width: "250px", // Same width as the sidebar
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#001F54",
    height: navbarHeight, // Set height to match the top navbar
    padding: theme.spacing(1),
  },
  navbarRight: {
    flexGrow: 1, // Take the remaining space
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: navbarHeight, // Set height to match the top navbar
  },
  contentContainer: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden", // Ensure no overflow issues
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
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
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
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>
        <Box sx={styles.navbar}>
          <Box sx={styles.navbarLeft}>
            <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
            <Typography variant="h6" sx={{ marginLeft: theme.spacing(1) }}>
              T-Movie
            </Typography>
          </Box>
          <Box
            sx={styles.navbarRight}
            style={{ justifyContent: "space-between" }}
          >
            <Typography variant="h4">Dashboard</Typography>
            <Box>
              <IconButton sx={{ color: "#fff" }}>
                <NotificationsIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <PersonIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.contentContainer}>
          <Box sx={styles.sidebar}>
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
              <Box
                sx={styles.searchContainer}
                style={{ justifyContent: "right" }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton>
                  <SaveAltIcon />
                </IconButton>
                <FormControl variant="outlined" size="small">
                  <InputLabel>Filter</InputLabel>
                  <Select
                    value={filter}
                    onChange={handleFilterChange}
                    label="Filter"
                    endAdornment={<FilterIcon />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"option1"}>Option 1</MenuItem>
                    <MenuItem value={"option2"}>Option 2</MenuItem>
                    <MenuItem value={"option3"}>Option 3</MenuItem>
                  </Select>
                </FormControl>
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
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card sx={styles.card}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
                      Program on Category
                    </Typography>
                    <PieChart
                      series={[
                        {
                          data: [
                            {
                              id: 0,
                              value: 10,
                              label: (location) => `${location}+A`,
                            },
                            {
                              id: 1,
                              value: 15,
                              label: (location) => `${location}+B`,
                            },
                            {
                              id: 2,
                              value: 20,
                              label: (location) => `${location}+C`,
                            },
                          ],
                          innerRadius: 30,
                          outerRadius: 100,
                          paddingAngle: 5,
                          cornerRadius: 5,
                          startAngle: -90,
                          endAngle: 180,
                          cx: 150,
                          cy: 150,
                          type: "pie",
                          arcLabel: "label",
                        },
                      ]}
                      height={400}
                      width={600}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card sx={styles.card}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ backgroundColor: "black", color: "white" }}
                    >
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
