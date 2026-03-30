import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ fetchRes }) => {
  const products = use(fetchRes);

  return (
    <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
