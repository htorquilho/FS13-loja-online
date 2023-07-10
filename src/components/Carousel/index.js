import React from "react";
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './styles.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel() {
    const theme = useTheme();
    const [offer,setOffer] = React.useState ([]);
   
    React.useEffect( () => {
        fetch('http://localhost:8000/best-offer')
        .then(res => res.json())
        .then(data => 
            setOffer(data)
            );
    }, []);

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = offer.length;
    
    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   };
    
    //   const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //   };
    
      const handleStepChange = (step) => {
        setActiveStep(step);
      };


    const InfoOffer = (props) => {
        return (
            <>
            <div className="best-offer-section">
                <Grid item xs={6} className="best-offer-left">
                    <div id="best-offer-name-section">{props.title}</div> 
                    <br />
                    <div id="best-offer-text">{props.text}</div> 
                    <br />
                    <div id="best-offer-description">{props.description}</div> 
                    <br />
                    <button id="best-offer-button">Ver Oferta</button>
                </Grid>
                <Grid item xs={6}>
                    <div className="best-offer-right">
                        <img id="img-offer" src={props.image} alt="best-offer-image" />
                    </div>
                </Grid>
            </div></>
        )
    }

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 1,
              bgcolor: 'background.default',
            }}
          >
          </Paper>

          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {offer.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
            
           
                <Grid container spacing={2}>
                {offer.map(cada => (
                        <InfoOffer title={cada.title} text={cada.text} description={cada.description} image={cada.image} />
                    ))}
                </Grid>
 
                ) : null}

              </div>
              
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={<div></div>}
            backButton={<div></div>}
            style={{backgroundColor:"#F5F5F5", color:"#C92071"}}
          />
        </Box>
      );
    }