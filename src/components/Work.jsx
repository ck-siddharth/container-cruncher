import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({ delay: 800 });
  }, []);
  return (
    <div id="work-component" style={{ padding: "40px" }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        <b>How our Services Work</b>{" "}
      </Typography>
      <Grid
        container
        sx={{
          paddingLeft: "10%", // Adjust the left padding as desired
          paddingRight: "10%", // Adjust the right padding as desired
          justifyContent: "space-between",
          mt: "10px",
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div data-aos="fade-right">
            <Box
              sx={{
                border: "1px solid black",
                width: "250px",
                height: "230px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Typography sx={{ mt: "40px" }}>Contact Us</Typography>
              <Typography sx={{ mt: "20px" }}>
                Contact Us with import /export needs
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              border: "1px solid black",
              width: "250px",
              height: "230px",
              margin: "0 auto",
              textAlign: "center",
              mt: "160px",
            }}
          >
            <Typography sx={{ mt: "40px" }}> Shipping Quote</Typography>
            <Typography sx={{ mt: "20px" }}>
              we will send you a shipping quote for approval
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div data-aos="fade-left">
            <Box
              sx={{
                border: "1px solid black",
                width: "250px",
                height: "230px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Typography sx={{ mt: "40px" }}> Verify</Typography>
              <Typography sx={{ mt: "20px" }}>
                Once approved,we will handled everything to our destination
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
