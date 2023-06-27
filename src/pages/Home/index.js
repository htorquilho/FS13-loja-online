import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedCollections from "../../components/FeaturedCollections";
import TrendingProducts from "../../components/TrendingProducts";

export default function Home() {
    return (
        <div>
            <Navbar/>

            <Menu/>

            <div>
                Carrossel
            </div>

            <FeaturedCollections/>

            <div >
                Coleções em Destaque 2
            </div>

            <TrendingProducts/>

            <div>
                Oferta Especial
            </div>

            <Footer/>
        </div>
    )
}