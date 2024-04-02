import "./App.css";
import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import HomePage from "./customer/pages/homePage/HomePage";

function App() {
  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="home">
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails/>
        <Footer />
      </div> 
    </>
  );
}

export default App;
