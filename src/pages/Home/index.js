import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedCollections from "../../components/FeaturedCollections";

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

            <div>
                Produtos
            </div>

            <div>
                Oferta Especial
            </div>

            <Footer/>
        </div>
    )
}