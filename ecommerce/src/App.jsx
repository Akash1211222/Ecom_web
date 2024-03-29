import "./App.css";
import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/homePage/HomePage";

function App() {
  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="home">
        <HomePage />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
