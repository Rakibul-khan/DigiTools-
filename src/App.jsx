import { useState } from "react";
import "./App.css";
import ActiveUser from "./components/ActiveUser/ActiveUser";
import Banner from "./components/Banner/Banner";
import GetStartedSection from "./components/GetStartedSection/GetStartedSection";
import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PricingSection/PricingSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import { toast, ToastContainer } from "react-toastify";
import ReadyTransformSection from "./components/ReadyTransformSection/ReadyTransformSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const handleBuyNow = (product) => {
    const specificProduct = cart.find((item) => item.id === product.id);
    if (specificProduct) {
      toast.warn("You have already the Item in Cart");
      return;
    } else {
      setCart([...cart, product]);
      setTotalCartPrice(totalCartPrice + product.price);
      toast(`${product.name} Added to Cart `);
    }
  };

  const handleRemoveBtn = (item) => {
    const filterdData = cart.filter((e) => e.id !== item.id);
    setCart(filterdData);
    setTotalCartPrice(totalCartPrice - item.price);
    toast(`${item.name} removed from cart`);
  };
  return (
    <div>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <ActiveUser></ActiveUser>
      <ProductsSection
        totalCartPrice={totalCartPrice}
        cart={cart}
        setCart={setCart}
        handleBuyNow={handleBuyNow}
        handleRemoveBtn={handleRemoveBtn}
      ></ProductsSection>
      <GetStartedSection></GetStartedSection>
      {/* <PricingSection></PricingSection> */}
      {/* <ReadyTransformSection></ReadyTransformSection> */}
      {/* <Footer></Footer> */}

      <ToastContainer />
    </div>
  );
}

export default App;
