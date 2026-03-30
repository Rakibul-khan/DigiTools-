import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 rounded-2xl p-3">
      <div className="flex items-center gap-3">
        <img src={item.image} alt="" />
        <div>
          <h1>{item.name}</h1>
          <span>${item.price}</span>
        </div>
      </div>
      <button className="text-red-700">Remove</button>
    </div>
  );
};

export default CartItem;
