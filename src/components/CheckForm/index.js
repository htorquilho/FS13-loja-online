import React from "react";
import {Checkbox, FormGroup, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import './styles.scss';

export default function CheckForm() { 
    const [check, setCheck] = React.useState("");
    const [radio, setRadio] = React.useState("");

    const selected = (event) => {
        setCheck(event.target.checked); 
            
        if (selected){
            alert('Filtro selecionado');
        }   
    };
    
    const  select = (event) => {
        setRadio(event.target.value);

        if (select){
            alert('Filtro selecionado');
        } 
    };
    
    return (
        <div className="checkform">
            <div className="filter">
                <span>Filtrar por</span>
            </div>
            
            <hr/>
            
            <div className="select-option">
            <span className="filter-title">Marka</span>
                <FormGroup value={check} onChange={selected}>
                    <FormControlLabel control={<Checkbox/>} label="Bandidas"/>
                    <FormControlLabel control={<Checkbox/>} label="Calengiaga"/>
                    <FormControlLabel control={<Checkbox/>} label="K-Swiss"/>
                    <FormControlLabel control={<Checkbox/>} label="Naike"/>
                    <FormControlLabel control={<Checkbox/>} label="Pumba"/>
                </FormGroup>
            </div>
            
            <div className="select-option">
            <span className="filter-title">Categoria</span>
                <FormGroup value={check} onChange={selected}>
                    <FormControlLabel control={<Checkbox/>} label="Esporte & Lazer"/>
                    <FormControlLabel control={<Checkbox/>} label="Casual"/>
                    <FormControlLabel control={<Checkbox/>} label="Utilitário"/>
                    <FormControlLabel control={<Checkbox/>} label="Corrida"/>
                </FormGroup>
            </div> 
            
            <div className="select-option">
            <span className="filter-title">Gênero</span>
                <FormGroup value={check} onChange={selected}>
                    <FormControlLabel control={<Checkbox/>} label="Masculino"/>
                    <FormControlLabel control={<Checkbox/>} label="Feminino"/>
                    <FormControlLabel control={<Checkbox/>} label="Unisex"/>
                </FormGroup>
            </div>
              
            <div className="select-option">
            <span className="filter-title">Estado</span>
                <FormGroup>
                    <RadioGroup value={radio} onChange={select}>
                        <FormControlLabel control={<Radio/>} value="novo" label="Novo"/>
                        <FormControlLabel control={<Radio/>} value="usado" label="Usado"/>
                    </RadioGroup>
                </FormGroup>
            </div>
        </div>
    )
}