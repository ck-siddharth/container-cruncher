import React, { useEffect ,useState} from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: '10%' }}>
        <Grid  className={animate ? 'slide-left-animation' : ''} item lg={6} md={6} sm={12} xs={12}>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="300"
            data-aos-easing="ease-in-out-cubic"
          >
            <Typography
              style={{
                textAlign: 'start',
                fontSize: '34px',
                fontWeight: 700,
              }}
            >
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </Typography>
            <Typography style={{ fontSize: '26px', marginTop: '25px', color: 'blue' }}>
              Lorem ipsum began as scrambled, nonsensical
            </Typography>
            <Typography
              style={{
                fontSize: '20px',
                width: '85%',
                marginTop: '20px',
                lineHeight: '30px',
              }}
            >
              Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC
              text De Finibus Bonorum et Malorum.
            </Typography>
            <Button
              style={{
                marginTop: '5%',
                height: '50px',
                width: '25%',
                borderRadius: '10px',
              }}
              variant="contained"
            >
              Contained
            </Button>
          </div>
        </Grid>
        <Grid className="fade-right" item lg={6} md={6} sm={12} xs={12}>
          <div
            className="well hidden-sm hidden-xs aos-item"
            data-aos="fade-left" // Updated to fade-left
            data-aos-mirror="true"
          >
            <img
              style={{
                width: '65%',
                borderRadius: '15px',
                float: 'right',
                animation: 'slideRight 5s ',
              }}
              alt="rugu"
             
              src="https://picsum.photos/536/354"
            />
            <img
              style={{
                width: '65%',
                borderRadius: '15px',
                marginTop: '23%',
                position: 'absolute',
                animation: 'slideRight 5s ',
              }}
              alt="popo"
              src="https://picsum.photos/536/354"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;
