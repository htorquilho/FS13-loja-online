import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorias" element={<Categories/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/produtos" element={<Products/>}/>
        <Route path="/produtos/:id" element={<ProductDetails/>}/>
        <Route path="/meus-pedidos" element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  )
}