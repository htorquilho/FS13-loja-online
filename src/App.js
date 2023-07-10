import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorias" element={<Categories/>}/>
        <Route path="/produtos" element={<AllProducts/>}/>
        <Route path="/produtos/:id" element={<ProductDetails/>}/>
        <Route path="/meus-pedidos" element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  )
}