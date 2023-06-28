import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import '../App.css'


const Footer = () => {
    return (
        <div>
          <footer
            style={{
              backgroundColor: "#f5f5f5",
              padding: "2rem 0",
              marginTop: "auto",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "2rem",
                  }}
                >
                  <Typography variant="h6" align="center">
                    Container
                  </Typography>
                  <Typography align="center">cruncher</Typography>
                  <Typography align="center" sx={{ fontSize: "13px" }}>
                    Seamless Imports,Simplified Logistics :Unlocking
                  </Typography>
                  <Typography align="center" sx={{ fontSize: "13px" }}>
                    Smooth Shipping for Ecommerce Seller!
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                style={{ textAlign: "center", marginLeft: "auto" }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Quick Links</Typography>
                  <Typography sx={{ fontSize: "13px", mt: "5px" }}>Home</Typography>
                  <Typography sx={{ fontSize: "13px", mt: "5px" }}>
                    What We do
                  </Typography>
                  <Typography sx={{ fontSize: "13px", mt: "5px" }}>
                    FAQ's
                  </Typography>
                  <Typography sx={{ fontSize: "13px", mt: "5px" }}>
                    Privacy Policy
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                style={{ textAlign: "center", marginLeft: "auto" }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Contact Us</Typography>
                  <Typography sx={{ fontSize: "13px" }}>Get Quote</Typography>
                  <Typography sx={{ fontSize: "13px" }}>Get Started</Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    hello@containercruncher.com
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={2} style={{ marginLeft: "auto" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">Get Social</Typography>
                 <Box>
                    <span>
                        <img className="social" src={facebook} alt="facebook"/>
                    </span>
                    <span>
                        <img className="social" src={twitter} alt="twitter"/>
                    </span>
                    <span>
                        <img className="social" src={linkedin} alt="linkedin"/>
                    </span>
                 </Box>
                </div>
              </Grid>
            </Grid>
    
            <hr style={{ marginTop: "45px" }} />
            <Typography sx={{ textAlign: "center" }}>
              Container Cruncher,@copyright 2023
            </Typography>
          </footer>
        </div>
      );
}

export default Footer;
