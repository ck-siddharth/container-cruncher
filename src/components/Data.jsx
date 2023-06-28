import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const Data = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div id="data-component">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "80px",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "50%" }}>
              <Box
                data-aos="fade-down"
                className="slide-in-down"
                sx={{ marginBottom: "20px" }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <b>Got Questions?</b>
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <b>We've Got You Covered?</b>
                </Typography>
                <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
                  If you have any further questions, Get in touch with <br /> our
                  friendly team
                </Typography>
              </Box>
              <Box data-aos="fade-up">
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "1px solid #D1D2E3",
                    marginBottom: "10px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        "@media (max-width: 480px)": { fontSize: "14px" },
                      }}
                    >
                      What is Container Cruncher?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        "@media (max-width: 480px)": { maxWidth: "250px" },
                      }}
                    >
                      Container Cruncher is a specialized web app offering a
                      comprehensive white glove import management and logistic
                      services exclusive design for e-commerce sellers. Our goal is
                      to simplify the import process and...
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "1px solid #D1D2E3",
                    marginBottom: "10px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        "@media (max-width: 480px)": { fontSize: "14px" },
                      }}
                    >
                      How can Container Cruncher benefit e-commerce sellers,
                      particularly those using Amazon FBA and Shopify?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        "@media (max-width: 480px)": { maxWidth: "250px" },
                      }}
                    >
                      Container Cruncher is a specialized web app offering a
                      comprehensive white glove import management and logistic
                      services exclusive design for e-commerce sellers. Our goal is
                      to simplify the import process and...
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "1px solid #D1D2E3",
                    marginBottom: "10px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        "@media (max-width: 480px)": { fontSize: "14px" },
                      }}
                    >
                      What is Container Cruncher?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        "@media (max-width: 480px)": { maxWidth: "250px" },
                      }}
                    >
                      Container Cruncher is a specialized web app offering a
                      comprehensive white glove import management and logistic
                      services exclusive design for e-commerce sellers. Our goal is
                      to simplify the import process and...
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "1px solid #D1D2E3",
                    marginBottom: "10px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        "@media (max-width: 480px)": { fontSize: "14px" },
                      }}
                    >
                      Can Container Cruncher assist with Amazon FBA labeling,
                      packaging, and inventory management?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        "@media (max-width: 480px)": { maxWidth: "250px" },
                      }}
                    >
                      Container Cruncher is a specialized web app offering a
                      comprehensive white glove import management and logistic
                      services exclusive design for e-commerce sellers. Our goal is
                      to simplify the import process and...
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "1px solid #D1D2E3",
                    marginBottom: "10px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        "@media (max-width: 480px)": { fontSize: "14px" },
                      }}
                    >
                      How does Container Cruncher ensure a seamless shipping
                      experience for Amazon FBA and Shopify Sellers?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        "@media (max-width: 480px)": { maxWidth: "250px" },
                      }}
                    >
                      Container Cruncher is a specialized web app offering a
                      comprehensive white glove import management and logistic
                      services exclusive design for e-commerce sellers. Our goal is
                      to simplify the import process and...
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Data;
