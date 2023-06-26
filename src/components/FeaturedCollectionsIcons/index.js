import { Fragment } from "react";
import React from "react";
import { Grid } from "@mui/material";
import camisetas from "../FeaturedCollectionsIcons/img/tshirt.png";
import calcas from "../FeaturedCollectionsIcons/img/pants.png";
import bones from "../FeaturedCollectionsIcons/img/cap.png";
import headphones from "../FeaturedCollectionsIcons/img/headphones.png";
import tenis from "../FeaturedCollectionsIcons/img/sneakers.png";
import "./styles.css";
import { Padding } from "@mui/icons-material";


export default function FeaturedCollectionsIcons() {
    return (
        <Fragment>
            <h2>Coleções em destaque</h2>

            <Grid container className="icones-background"> 
                <Grid item className="div-icones">
                    <div className="icone"><img src={camisetas} alt="ícone de camiseta"/></div>
                    <div className="texto">Camisetas</div>
                </Grid>

                <Grid item className="div-icones">
                    <div className="icone"><img src={calcas} alt="ícone de calças"/></div>
                    <div className="texto">Calças</div>
                </Grid>

                <Grid item className="div-icones">
                    <div className="icone"><img src={bones} alt="ícone de boné"/></div>
                    <div className="texto">Bonés</div>
                </Grid>

                <Grid item className="div-icones">
                    <div className="icone"><img src={headphones} alt="ícone de headphones"/></div>
                    <div className="texto">Headphones</div>
                </Grid>

                <Grid item className="div-icones">
                    <div className="icone"><img src={tenis} alt="ícone de tênis"/></div>
                    <div className="texto">Tênis</div>
                </Grid>
            </Grid>
        </Fragment>
    )
}