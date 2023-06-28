import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { Component,useEffect } from "react";
import "../App.css"
import AOS from "aos";
import "aos/dist/aos.css";

const CardShop = () => {
    useEffect(() => {
        AOS.init()
    },[])
    return (
        <Container>
            <Box sx={{ marginTop: '15%', marginBottom: '5%' }}>
              <div data-aos="fade-down">
              <Typography className="slide-in-down" style={{
                    textAlign: 'center',
                    fontSize: '36px',
                    fontWeight: 700
                }}>Perfect for You</Typography>
                <Typography className="slide-in-down" style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 500,
                    marginTop: '15px',
                    padding: '0px 25%'
                }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </Typography>
              </div>
                <Box>
                    <Grid spacing={4} container style={{ marginTop: '20px', padding: '0px 55px' }}>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                          <div data-aos="fade-right">
                          <Card  style={{  width: '100%', height: '100%', borderRadius: '15px',border:"1px solid #D4D5E5" }}>
                                <Box sx={{ padding: '35px 0px' }}>
                                    <i className="fa fa-amazon" style={{ fontSize: '50px', display: 'block', textAlign: 'center' }} aria-hidden="true"></i>
                                </Box>
                                <Typography style={{
                                    fontSize: '22px',
                                    textAlign: 'center',
                                    fontWeight: 700
                                }}>Amazon Seller's</Typography>
                                <Typography style={{ textAlign: 'center', padding: '22px 12px' }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </Typography>
                            </Card>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                           <div >
                           <Card data-aos="fade-up" style={{ border:"1px solid #D4D5E5", width: '100%', height: '100%', borderRadius: '15px' }} >
                                <Box sx={{ padding: '35px 0px' }}>
                                    <i className="fa fa-amazon" style={{ fontSize: '50px', display: 'block', textAlign: 'center' }} aria-hidden="true"></i>
                                </Box>
                                <Typography style={{
                                    fontSize: '22px',
                                    textAlign: 'center',
                                    fontWeight: 700
                                }}>Amazon Seller's</Typography>
                                <Typography style={{ textAlign: 'center', padding: '22px 12px' }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </Typography>
                            </Card>

                           </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                          <div data-aos = "fade-left">
                          <Card className="slide-in-left" style={{  width: '100%', height: '100%', borderRadius: '15px',border:"1px solid #D4D5E5", }} >
                                <Box sx={{ padding: '35px 0px' }}>
                                    <i className="fa fa-amazon" style={{ fontSize: '50px', display: 'block', textAlign: 'center' }} aria-hidden="true"></i>
                                </Box>
                                <Typography style={{
                                    fontSize: '22px',
                                    textAlign: 'center',
                                    fontWeight: 700
                                }}>Amazon Seller's</Typography>
                                <Typography style={{ textAlign: 'center', padding: '22px 12px' }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </Typography>
                            </Card>
                          </div>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>

                  <Button data-aos="fade-up" style={{
                        marginTop: '5%',
                        height: '50px',
                        width: '25%',
                        borderRadius: '10px'
                    }} variant="contained">Contained</Button>
            
                </Box>
            </Box>
        </Container>
    )
}

export default CardShop