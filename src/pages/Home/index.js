import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedCollections from "../../components/FeaturedCollections";
import SpecialOffer from "../../components/SpecialOffer";

export default function Home() {
    return (
        <div>
            <Header/>

            <div>
                Carrossel
            </div>

            <FeaturedCollections/>

            <div>
                Coleções em Destaque 2
            </div>

            <div>
                Produtos
            </div>

            <SpecialOffer />
            

            <Footer/>
        </div>
    )
}