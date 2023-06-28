import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import logistic from "../assets/logistics.jpg";
import duty from "../assets/duty.jpg";
import custom from "../assets/custom.jpg";
import amazon from "../assets/amazon.jpg";
import warehousing from "../assets/warehouse.jpg";
import pick from "../assets/pick.jpg";
import wrr from "../assets/wrr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Images = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${wrr})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };
  backgroundImageStyle["@media (max-width: 575.98px)"] = {
    height: "240vh",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Grid container sx={backgroundImageStyle}>
        <div style={overlayStyle} />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ml: "auto",
            mr: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box data-aos="fade-down" sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{ marginBottom: "20px" }}
              color="white"
              variant="h5"
            >
              We Fully Manage
            </Typography>
            <Typography sx={{ marginBottom: "20px" }} color="white">
              We handle every step of the import process so you can rest easy
              and focus on your business with complete peace of mind
            </Typography>
          </Box>
          <Grid
            data-aos="fade-right"
            container
            spacing={2}
            sx={{ justifyContent: "center", mt: "10px" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-left"
            className="slide-in-left"
            container
            sx={{ justifyContent: "center", mt: "10px" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box sx={imageStyle}>
                <img src={pick} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Images;
