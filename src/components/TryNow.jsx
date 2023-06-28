import { Box, Button, Typography } from "@mui/material";
import React, { Component, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TryNow = () => {
    useEffect(() => {
        AOS.init()
    },[])

    return (
        <Box style={{
            backgroundImage: 'url("https://picsum.photos/536/354")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '370px',
            position: 'relative'
        }}>
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff'
                }}>
             <div data-aos="fade-down">
             <Typography className="slide-in-down" style={{
                    textAlign: 'center',
                    fontSize: '30px',
                    fontWeight: 700,
                    padding: '60px 23% 0px 23%',
                }}>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</Typography>
                <Typography className="slide-in-down" style={{
                    textAlign: 'center',
                    fontSize: '25px',
                    marginTop: '12px'
                }}>Lorem ipsum began as scrambled, nonsensical</Typography>
             </div>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              
              
               <Button data-aos = "fade-up" style={{
                        marginTop: '2%',
                        height: '50px',
                        width: '10%',
                        borderRadius: '10px',
                    }} variant="contained">Try Now</Button>
               
                </Box>
            </Box>
        </Box>
    )
}

export default TryNow;