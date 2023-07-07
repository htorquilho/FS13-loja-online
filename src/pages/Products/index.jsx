import Header from "../../components/Header";
import "./style.scss";
import sneakers from "./page3-sneakers.png"
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Products() {
    return (
        
        <div>

        <Header/>

        <div className="Products">

            <div className="titulo">

            <a className={('/')} to="/">Home</a>/
            <a className={('/produtos')} to="/produtos">Produtos</a>/
            <a className={('/categorias')} to="/categorias">Tênis</a>/
            <a className={("/meus-pedidos")} to="/meus-pedidos">Nike</a>/
            <a className={("/meus-pedidos")} to="/meus-pedidos">Tênis Nike Revolution 6 Next Nature Masculino</a>

            </div>

            <div className="row">
                <div className="sneakers">
                    <img src={sneakers} alt="" />
                </div>

                <div className="info">
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <br />
                    <h2>Casual | Nike | REF:38416711</h2>
                    <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                    <h3>R$219,00</h3>
                    <h2>Descrição do produto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <h2>Tamanho</h2>
                    <div className="tamanho">
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                    </div>
                    <h2>Cor</h2>
                    <button className="redondo" style={{ background: "#6EEEFF" }} />
                    <button className="redondo" style={{ background: "#FF6969" }} />
                    <button className="redondo" style={{ background: "#5D5D5D" }} />
                    <button className="redondo" style={{ background: "#6D70B7" }} />
                    <br />
                    <button className="comprar">Comprar</button>
                </div>
            </div>

        </div>
        </div>
    )
}


