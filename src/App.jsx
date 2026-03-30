import { useState } from "react";
import "./App.css";
import ActiveUser from "./components/ActiveUser/ActiveUser";
import Banner from "./components/Banner/Banner";
import GetStartedSection from "./components/GetStartedSection/GetStartedSection";
import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PricingSection/PricingSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const handleBuyNow = (product) => {
    setCart([...cart, product]);
    setTotalCartPrice(totalCartPrice + product.price);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ActiveUser></ActiveUser>
      <ProductsSection
        totalCartPrice={totalCartPrice}
        cart={cart}
        handleBuyNow={handleBuyNow}
      ></ProductsSection>
    </div>
  );
}

export default App;
