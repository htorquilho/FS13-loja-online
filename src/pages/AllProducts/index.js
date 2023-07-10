import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";

export default function AllProducts() {
    return (
        <div>
            <Navbar/>
            <Menu/>
            
            <Products/>
           
            <Footer/>
        </div>
    )
}