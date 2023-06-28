import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { Component, useEffect } from "react";
import "../App.css";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Company = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <Box
        data-aos="fade-up"
        sx={{
          marginTop: "28%",
          "@media (min-width: 1050px)": {
            marginTop: "8%",
          },
        }}
      >
        <Typography style={{ fontSize: "22px", textAlign: "center" }}>
          Lorem ipsum is placeholder text
        </Typography>
        <Grid container style={{ marginTop: "15px" }} spacing={2}>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner1} alt="partner1" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner2} alt="partner2" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner3} alt="partner3" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner4} alt="partner4" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner5} alt="partner5" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={3}>
            <img src={partner6} alt="partner6" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Company;
