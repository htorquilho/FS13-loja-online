import React from "react";
import { Button, Grid, Typography } from '@mui/material';
import bgSpecialOffer from './img/ellipse-oferta-especial.svg';
import tenisOffer from './img/tenis-oferta-especial.svg';
import "./styles.scss";

export default function SpecialOffer() {
    const [image,setImage] = React.useState ('');
    const [text,setText] = React.useState ('');
    const [description,setDescription] = React.useState ('');

    React.useEffect( () => {
        fetch('http://localhost:8000/collections')
        .then(res => res.json())
        .then(data => { 
            setImage(data.image);
            setText(data.text)
            setDescription(data.description);
        });
    }, []);

    return (
        <Grid container spacing={4} className="special-offer-section" >
            <Grid item xs={6} md={4}>
                <div id="bg-offer"><img src={bgSpecialOffer} alt="bg-oferta-especial" /></div>
                <div id="img-offer"><img src={tenisOffer} alt="offer-image" /></div>
            </Grid>

            <Grid item xs={6} md={8}>
                <div id="special-offer-name-section">Oferta Especial</div>
                <div id="special-offer-text">{text}Lorem</div>
                <div id="special-offer-description">{description}Lorem</div>
                <Grid>
                    <Button variant="contained" id="special-offer-button">Ver Oferta</Button>
                </Grid>
            </Grid>
        </Grid>
    );
 };