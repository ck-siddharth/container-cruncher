import { Box, Typography } from "@mui/material";
import React, { Component, RefObject, useEffect } from "react";
import "../App.css";
import container from "../assets/container.jpg";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      style={{
        backgroundImage: `url(${container})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "95%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 0",
        paddingLeft: "5%",
      }}
    >
      <Box
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          maxWidth: "1200px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <div data-aos="fade-down">
          <Typography
            variant="h4"
            style={{
              marginBottom: "10px",
            }}
          >
            We're Part Of Your Team
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "20px",
              whiteSpace: "pre-line",
            }}
          >
            Say goodbye to the complexities and frustrations of importing as our
            friendly and dedicated team takes care of every detail, ensuring a
            smooth and stress-free experience tailored to your unique needs.
          </Typography>
          <Box
          data-aos="fade-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Box
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                justifyContent: "flex-start",
                width: "65%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={logo}
                alt="Logo 1"
                style={{
                  height: "60px",
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  Shipment within a week
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Founded by former Amazon employees and 9-figure e-commerce
                  sellers, we know time is your most valuable asset. We handle
                  the complicated paperwork and communicate proactively so you
                  can focus on growing your business.
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                justifyContent: "flex-start",
                width: "65%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={logo}
                alt="Logo 2"
                style={{
                  height: "60px",
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  Shipment within a week
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Founded by former Amazon employees and 9-figure e-commerce
                  sellers, we know time is your most valuable asset. We handle
                  the complicated paperwork and communicate proactively so you
                  can focus on growing your business.
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                justifyContent: "flex-start",
                width: "65%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={logo}
                alt="Logo 3"
                style={{
                  height: "60px",
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  Shipment within a week
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Founded by former Amazon employees and 9-figure e-commerce
                  sellers, we know time is your most valuable asset. We handle
                  the complicated paperwork and communicate proactively so you
                  can focus on growing your business.
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Team;
