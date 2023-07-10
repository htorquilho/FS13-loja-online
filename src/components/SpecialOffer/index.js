import React from "react";
import { Grid } from '@mui/material';
import "./styles.scss";

export default function SpecialOffer() {
    const [offer,setOffer] = React.useState ([]);
   
    React.useEffect( () => {
        fetch('http://localhost:8000/special-offer')
        .then(res => res.json())
        .then(data => 
            setOffer(data)
            );
    }, []);


    const InfoOffer = (props) => {
        return (
            <><Grid item xs={6}>
                <div className="special-offer-left">
                    <img id="img-offer" src={props.image} alt="offer-image" />
                </div>
            </Grid>
            <Grid item xs={6}>
                    <div className="special-offer-right">
                        <div id="special-offer-name-section">Oferta especial</div> 
                        <br />
                        <div id="special-offer-text">{props.text}</div> 
                        <br />
                        <div id="special-offer-description">{props.description}</div> 
                        <br />
                        <button id="special-offer-button">Ver Oferta</button>
                    </div>
            </Grid></>
        )
    }

    return(
        <div className="offer-section">
            <Grid container spacing={2}>
               {offer.map(cada => (
                    <InfoOffer image={cada.image} text={cada.text} description={cada.description} />
                ))}
            </Grid>
        </div>
    )
 };
