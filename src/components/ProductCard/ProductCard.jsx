import { Check } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const { name, tag, price, period, image, features, description } = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className=" flex justify-between px-7 mt-4 ">
        <div className="border-2 border-gray-300 p-3 rounded-full ">
          <img src={image} alt={name} />
        </div>
        <div>
          {tag === "new" ? (
            <span className="bg-green-100  text-[#0A883E] font-medium px-3 py-1 rounded-full">
              New
            </span>
          ) : tag === "popular" ? (
            <div className="bg-purple-200 rounded-full py-1">
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  font-medium px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
          ) : (
            <span className="bg-[#fef3c6] text-[#BB4D00] font-medium px-3 py-1 rounded-full">
              Best Sellar
            </span>
          )}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p>{description}</p>
        <div>
          <span className="font-bold text-xl">${price}</span>/
          <span>{period}</span>
        </div>
        {features.map((feature, index) => (
          <p className="flex gap-1 text-gray-700" key={index}>
            <Check className="text-green-600" />
            {feature}
          </p>
        ))}
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
