import "./App.css";
import ActiveUser from "./components/ActiveUser/ActiveUser";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import ProductsSection from "./components/ProductsSection/ProductsSection";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ActiveUser></ActiveUser>
      <ProductsSection></ProductsSection>
    </div>
  );
}

export default App;
