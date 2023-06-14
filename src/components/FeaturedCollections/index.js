import { Grid, Button } from "@mui/material";
import "./styles.scss";
import tenis from "./img/tenis.png";

export default function FeaturedCollections() {
    const Card = (props) => {
        return (
            <Grid item xs={4}>
                <div className="card">
                    <div>
                        {props.discount}
                        {props.discount && "%"} 
                        
                        <br/>
                        {props.text} <br/>

                        <Button variant="contained">Comprar</Button>
                    </div>

                    <div>
                        <img src={props.image}/>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            Coleções em Destaque

            <Grid container spacing={2}>
                <Card text="Camisetas" discount={30} image={tenis}/>
                <Card text="Tenis" image={tenis}/>
                <Card text="Headsets" discount={20} image={tenis}/>
            </Grid>
        </div>
    )
}