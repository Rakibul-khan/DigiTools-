import React from "react";
import CartItem from "../CartItem/CartItem";
import { ShoppingCart } from "lucide-react";

const Cart = ({ cart, totalCartPrice, handleRemoveBtn }) => {
  return (
    <div className="shadow-2xl rounded-lg bg-gray-100 w-10/12 mx-auto p-4 space-y-3 mb-20 ">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      {cart.length == 0 ? (
        <div className="flex justify-center items-center px-8 py-15 ">
          <div className="space-y-2">
            <ShoppingCart className=" h-20 w-20 mx-auto text-gray-500" />
            <p className="text-center text-gray-500">Your Cart is Empty</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {cart.map((item, index) => (
            <CartItem
              handleRemoveBtn={handleRemoveBtn}
              key={index}
              item={item}
            ></CartItem>
          ))}
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span className="font-bold text-2xl">${totalCartPrice}</span>
          </div>
          <button className="btn btn-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
