import React from "react"
import { Grid } from "@mui/material";
import "./style.scss"

export default function RelatedProducts() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/trending')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        return (
            <Grid  item xs={3}>
                
                
                <div className="card row">
                    
                    <div class="column">

                        <div class="t ">
                        {props.discount}
                        {props.discount && "% OFF" } 
                        </div>

                        <br/>

                    </div>

                    <div class="column">

                        <img src={props.image}/>

                    </div>

                        <h2>Tênis</h2>

                    <div class="texto">
                                {props.text} <br/>
                    </div>

                    <div class="precos">
                        
                    <div class="discount">
                                {props.price2 } 
                    </div>

                        <div class="price">
                                {props.price1}
                    </div>
                    </div>
                </div>
                
            </Grid>
        )
    }

    return (
        <div className="trending ">
            <div class="trending2">
                <div><h1 class="title">Produtos em alta</h1></div>
                <div>Ver Tudo</div>
            </div>
            

            <Grid container spacing={3}>
                {items.map(cada => (
                    <Card text={cada.title} discount={cada.discount} image={cada.image} price1={cada.price1} price2={cada.price2} />
                ))}
            </Grid>
        </div>
    )
}


