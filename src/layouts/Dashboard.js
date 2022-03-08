import React, { useState, useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// components

import { grey } from "@mui/material/colors";
import Footer from "../components/Footers/Footer";
import D3Container from "../components/ChartContainer";
import theme from "../assets/styles/AppTheme";
import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import Welcome from "../components/Cards/CardWelcome";
import Stars from "../components/Cards/CardStars";
import Trends from "../components/Cards/CardTrends";
import Banner from "../components/Banner/Banner";
import RatingsTrends from "../components/utils/RatingsTrends.js";
import { DatastoreContext } from "../context/DatastoreProvider";

const Item = styled(Paper)(() => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Dashboard() {
  const { datastore } = useContext(DatastoreContext);
  const [filterMenuOpen, toggleFilterMenu] = useState(false);
  const [showRatings, setShowRatings] = useState(true);
  const [updateDate, setUpdateDate] = useState("Mar 1 2022");
  const [updateTime, setUpdateTime] = useState("9:05 AM");

  // If control needs to be shared across multiple components,
  // add them through useState above and append them to these.
  const dashboardState = {
    filterMenuOpen,
  };

  const dashboardActions = {
    toggleFilterMenu,
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <DashboardNavbar />
        <Paper
          className="dashboard__paper"
          sx={{
            padding: 4,
            height: "90vh",
            background: theme.palette.background.main,
            mb: "20px",
          }}
        >
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
              <Grid item sm={12} sx={{ bgColor: grey }}>
                <Item>
                  <Banner updateDate={updateDate} updateTime={updateTime} />
                  {showRatings ? (
                    <RatingsTrends
                      starRating={2.5}
                      AIS={"10"}
                      DDR={"-5"}
                      ProjectedBonus={"40"}
                    />
                  ) : null}
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <D3Container
                    dashboardState={dashboardState}
                    dashboardActions={dashboardActions}
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>Reports</Item>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Footer sx={{ mt: "20px" }} />
      </ThemeProvider>
    </Box>
  );
}
