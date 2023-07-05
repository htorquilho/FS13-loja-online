import { Button, Grid } from '@mui/material';
import tenisSpecialOffer from './img/tenis-oferta-especial.svg';
import bgSpecialOffer from './img/ellipse-oferta-especial.svg';
import "./styles.scss";

export default function SpecialOffer() {
    return(
        <Grid>
            <Grid>
                <img src={tenisSpecialOffer} alt="specialOffer" />
                <img src={bgSpecialOffer} alt="specialOffer" />
            </Grid>
            <Grid className="of-especial-button">
                <Button>Oferta especial</Button>
            </Grid>


        </Grid>
    )
}