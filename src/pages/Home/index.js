import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedCollections from "../../components/FeaturedCollections";
import SpecialOffer from "../../components/SpecialOffer";
import TrendingProducts from "../../components/TrendingProducts";
import Carousel from "../../components/Carousel";

export default function Home() {
    return (
        <div style={{ width: '1440px' }}>
            
            <Header />

            <Carousel />

            <FeaturedCollections/>

            <div>
                Coleções em Destaque 2
            </div>

            <TrendingProducts/>
            
            <SpecialOffer />

            <Footer/>
                  
        </div>
    )
}