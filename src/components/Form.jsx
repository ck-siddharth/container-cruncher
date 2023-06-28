import React, { useEffect } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import truck from "../assets/truck.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          mt: "10px",
          p: "90px",
          textAlign: "center",
          backgroundColor: "#21368D",
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ padding: "5%" }}>
          <Box
            data-aos="fade-down"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              marginTop: "30px",
            }}
          >
            <Typography variant="h5" color="white" sx={{ mb: "20px" }}>
              Get a Quote Today?
            </Typography>
            <Typography color="white" sx={{ mb: "20px" }}>
              Contact us today for a free quote and explore the benefits of our
              100% white glove logistics service for your business.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <Box sx={{ marginRight: "20px" }}>
                <img src="" alt="" />
                <Typography color="white">Packaging and Storage</Typography>
              </Box>
              <Box>
                <img src="" alt="" />
                <Typography color="white">Warehousing Service</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ marginRight: "20px" }}>
                <img src="" alt="" />
                <Typography color="white">Ground Transport</Typography>
              </Box>
              <Box>
                <img src="" alt="" />
                <Typography color="white">Logistic Service</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            data-aos="fade-up"
            sx={{
              justifyContent: "center",
              backgroundColor: "white",
              p: "40px",
              width: "60%",
              margin: "0 auto",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align elements to the left
              borderRadius: "20px",
            }}
          >
            <Typography sx={{ textAlign: "left", mb: "10px" }}>Name</Typography>
            <TextField
              placeholder="Enter Your Name"
              sx={{ width: "100%", height: "50px" }}
            />
            <Typography sx={{ mt: "10px", textAlign: "left", mb: "10px" }}>
              Email
            </Typography>
            <TextField
              placeholder="Enter Your Email"
              sx={{ width: "100%", height: "50px" }}
            />
            <Typography sx={{ mt: "10px", textAlign: "left", mb: "10px" }}>
              Phone
            </Typography>
            <TextField
              placeholder="Enter your phone Number"
              sx={{ width: "100%", height: "50px" }}
            />
            <Typography sx={{ mt: "10px", textAlign: "left", mb: "10px" }}>
              Message
            </Typography>
            <TextField
              placeholder="Enter your Message"
              sx={{ width: "100%", height: "50px" }}
            />
            <Button
              sx={{
                backgroundColor: "#6D5BDE",
                color: "white",
                mt: "40px",
                width: "100%",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ position: "relative" }}>
          {/* <img
            src={truck}
            alt="Your Image"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100px",
              height: "100px",
            }}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
