import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import Receipt from "../Receipt";

const ProductList = () => {
  const items = useSelector(state => state.product.items);

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto gap-3">
        {items.map((item) => (
          <ProductCard key={item.id} id={item.id} />
        ))}
      </div>

      <Receipt />
    </>
  );
};

export default ProductList;
