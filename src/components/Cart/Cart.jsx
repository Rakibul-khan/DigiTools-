import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, totalCartPrice }) => {
  return (
    <div className="shadow-2xl rounded-lg bg-gray-100 w-10/12 mx-auto p-4 space-y-3 ">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartItem item={item}></CartItem>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span>Total:</span>
        <span className="font-bold text-2xl">${totalCartPrice}</span>
      </div>
      <button className="btn btn-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
