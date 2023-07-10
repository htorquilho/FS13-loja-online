import React from "react";
import { Grid, MenuItem, FormControl, Select } from "@mui/material";
import CheckForm from "../CheckForm";
import './styles.scss';


export default function Products() {
    const [items, setItems] = React.useState([]);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    React.useEffect(() => {
        fetch('http://localhost:8000/products')
        .then(res => res.json())
        .then(data => {setItems(data)});
    }, []);

    const Cards = (props) => {
        return (
            <div>
                <Grid item className="tenis-cards">
                    <div className="discount-text">
                        <span className={`discount ${props.discount ? 'discounted' : ''}`}>
                            {props.discount}
                            {props.discount && "% OFF"}
                        </span>
                        <br/>
                        <div className="tenis-img">
                           <img src={props.image} alt=""/> 
                        </div>
                    </div>

                    <div className="text-cards">
                        <span className="title">{props.title}</span>
                            <br/>
                        <span className="text">{props.text}</span>
                            <br/>
                        <span className="value">${props.value}</span>
                        <span className="newValue">${props.newValue}</span>
                    </div>
                </Grid>
            </div>
        )
    }
    
    return (        
    <div className="Products">
        
        <div className="ResultsOrder">    
            <div className="results">
                <span className="resultsFor">Resultados para "Tênis" -</span>
                <span className="p-389"> 389 produtos</span>
            </div>
            
            <div className="FormSelect">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                        <span>
                            <strong className="selected">Ordenar por:</strong> {selected || "mais relevantes"}
                        </span>
                    )}
                    
                    >
                        <MenuItem value="mais relevantes">mais relevantes</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
       
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <CheckForm/>
            </Grid>

            <Grid item xs={8} className="images-grid">
                <Grid container spacing={2} columns={3} justifyContent={"flex-end"}>
                {items.map((cada) => (
                    <Grid item key={cada.id} xs>
                    <Cards
                        discount={cada.discount}
                        image={cada.image}
                        title={cada.title}
                        text={cada.text}
                        value={cada.value}
                        newValue={cada.newValue}
                    />
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
</div>
    )
}