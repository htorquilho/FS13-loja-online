import React from "react";
import { Grid } from "@mui/material";
import digitalstore from "../Footer/img/digitalstore-icon.svg";
import facebook from "../Footer/img/facebook-icon.svg";
import instagram from "../Footer/img/instagram-icon.svg";
import twitter from "../Footer/img/twitter-icon.svg";
import "./styles.scss";

export default function Footer() {
  return (
  <div className="footer">
        <Grid container className="footer-grid">
          <Grid>
              <div className="logomarca">
                <img className="logo-img" src={digitalstore} alt="Icone da Digital Store"/>
                <div className="titulo-loja">Digital Store</div>
              </div> 

              <p className="p-loja">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

              <img src={facebook} className="face-icon" alt="ícone do Facebook"/>
              <img src={instagram} className="insta-icon" alt="ícone do Instagram"/>
              <img src={twitter} className="twit-icon" alt="ícone do Twitter"/>
          </Grid>
          <Grid>
              <h4 className="titulo-info">Informação</h4>

              <div className="div-info">
                  <div>Sobre Drip Store</div>
                  <div>Segurança</div>
                  <div>Wishlist</div>
                  <div>Blog</div>
                  <div>Trabalhe conosco</div>
                  <div>Meus Pedidos</div>
              </div>  
          </Grid>

          <Grid>
              <h4 className="titulo-categorias">Categorias</h4>

              <div className="div-categorias">    
                  <div>Camisetas</div>
                  <div>Calças</div>
                  <div>Bonés</div>
                  <div>Headphones</div>
                  <div>Tênis</div>  
              </div> 
          </Grid>

          <Grid>
              <h4 className="titulo-contato">Contato</h4>
              <p className="p-endereco">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p className="p-telefone">(85) 3051-3411</p>  
          </Grid>
          
          <hr/>
          
          <p className="p-copy">&copy; 2022 Digital College</p>
          
        </Grid>
  </div>
  )
}
