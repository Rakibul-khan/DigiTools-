import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";
import GetStartedSection from "../GetStartedSection/GetStartedSection";
import PricingSection from "../PricingSection/PricingSection";

const Products = ({ fetchRes, handleBuyNow }) => {
  const products = use(fetchRes);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 lg:gap-3 w-11/12 mx-auto">
        {products.map((product) => (
          <ProductCard
            handleBuyNow={handleBuyNow}
            key={product.id}
            product={product}
          ></ProductCard>
        ))}
      </div>
      <GetStartedSection></GetStartedSection>
      <PricingSection></PricingSection>
    </>
  );
};

export default Products;
