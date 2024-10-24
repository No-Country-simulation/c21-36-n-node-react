import "./App.scss";
import Header from "./components/Header/Header";
import ProductCardCarousel from "./components/carousels/ProductCardCarousel";
import Login from "./components/Login/Login";
import HomeImgCarousel from "./components/carousels/HomeImgCarousel";
import StoresOfTheMonth from "./components/storesOfTheMonth/StoresOfTheMonth";
import SpotTop from "./components/Spots/SpotTop";
import SpotBottom from "./components/Spots/SpotBottom";
import Register from "./components/Login/Register";
import Validation from "./components/Login/Validation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Register />
      {/*     <Validation /> */}
      <HomeImgCarousel />
      <SpotTop />
      <ProductCardCarousel title="Selecionados para tí" />
      <StoresOfTheMonth />
      <ProductCardCarousel title="Mejores precios" />
      <ProductCardCarousel title="Más vendidos" />
      <SpotBottom />
      <Footer />
    </div>
  );
}

export default App;
