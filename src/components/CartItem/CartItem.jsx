import { Hamburger } from "lucide-react";
import React from "react";

const CartItem = ({ item, handleRemoveBtn }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 rounded-2xl p-3">
      <div className="flex items-center gap-3">
        <img
          className="bg-white rounded-full p-3 object-cover"
          src={item.image}
          alt=""
        />
        <div>
          <h1>{item.name}</h1>
          <span>${item.price}</span>
        </div>
      </div>
      <button
        onClick={() => handleRemoveBtn(item)}
        className="text-red-700 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
