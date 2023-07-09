import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedCollections from "../../components/FeaturedCollections";
import TrendingProducts from "../../components/TrendingProducts";

export default function Home() {
    return (
        <div>
            <Header/>

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