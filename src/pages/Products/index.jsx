import Header from "../../components/Header";
import "./style.scss";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RelatedProducts from "../../components/RelatedProducts";

export default function Products() {
    const [items, setItems] = React.useState([]); 
    const [currentImage, setCurrentImage] = React.useState('');
    const [currentTitle, setcurrentTitle] = React.useState('');
    const [currentRef, setcurrentRef] = React.useState('');
    const [currentPrice, setcurrentPrice] = React.useState('');
    const [currentDescription, setcurrentDescription] = React.useState('');

    React.useEffect(() => {
        fetch('http://localhost:8000/page3')
            .then(res => res.json())
            .then(data => {
          setItems(data);
          setCurrentImage(data[0].image);
          setcurrentTitle(data[0].title);
          setcurrentRef(data[0].ref);
          setcurrentPrice(data[0].price);
          setcurrentDescription(data[0].description);

        });
    }, []);

    function loadNewImage(imageUrl) {
        setCurrentImage(imageUrl);
      }

    return (
        
        <div style={{ backgroundColor: '#F9F8FE' }}>

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
                <img  src={currentImage} alt="Product" />
                <p>TESTANDO</p>
                </div>

                <div className="info" >
                    <h1>{currentTitle}</h1>
                    <br />
                    <h2>{currentRef}</h2>
                    <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                    <h3>{currentPrice}</h3>
                    <h2>Descrição do produto</h2>
                    <p>{currentDescription}</p>
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

            <div className="image-gallery">
                {items.map(item => (
                 <img className={`img3 ${item.color}`}
                 key={item.id}
                 src={item.image }
                 alt="Thumbnail"
                 onClick={() => loadNewImage(item.image)}
                 
                />
                ))}
            </div>
            <RelatedProducts/>
        </div>
    )
}


