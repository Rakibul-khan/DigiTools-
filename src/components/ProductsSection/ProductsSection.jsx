import React, { useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
const fetchPromise = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchRes = fetchPromise();
const ProductsSection = ({ handleBuyNow, cart, totalCartPrice }) => {
  const [toggle, setToggle] = useState("products");
  return (
    <div className="mt-15 ">
      <h1 className="font-extrabold text-5xl text-center">
        Premium Digital Tools
      </h1>
      <p className="text-center">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Buttons */}
      <div className="flex items-center  justify-center">
        <button
          onClick={() => setToggle("products")}
          className={`btn rounded-full px-8 ${toggle === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
        >
          Products
        </button>
        <button
          onClick={() => setToggle("cart")}
          className={`btn rounded-full px-10 ${toggle === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
        >
          Cart
        </button>
      </div>

      {toggle === "products" ? (
        <Products handleBuyNow={handleBuyNow} fetchRes={fetchRes}></Products>
      ) : (
        <Cart totalCartPrice={totalCartPrice} cart={cart}></Cart>
      )}
    </div>
  );
};

export default ProductsSection;
