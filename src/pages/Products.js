import React from "react";
import { Navbar, Product } from "../components";
import { products } from "../db/products";
export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-justify-center align-items-stretch flex-wrap">
        {products.map((product) => {
          return <Product product={product} id={product.id} />;
        })}
      </div>
    </div>
  );
}
