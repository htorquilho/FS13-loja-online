import React from "react";
import { Grid, Button } from "@mui/material";
import "./styles.scss";
import tenis from "./img/tenis.png";
import { spacing } from '@mui/system';

export default function FeaturedCollections() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/collections')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        return (
            <Grid  item xs={4}>
                
                
                <div className="card row">
                    
                    <div class="column">

                        <div class="t ">
                        {props.discount}
                        {props.discount && "% OFF" } 
                        </div>

                        <br/>

                        <div class="texto">
                        {props.text} <br/>
                        </div>
                        <button class="btn">Comprar</button>
                        
                    </div>

                        <div class="column img">

                        <img src={props.image}/>

                        </div>

                    
                    
                </div>
                
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            <h1 class="destaque">Coleções em destaque</h1>

            <Grid container spacing={3}>
                {items.map(cada => (
                    <Card text={cada.title} discount={cada.discount} image={cada.image}/>
                ))}
            </Grid>
        </div>
    )
}
