import React from "react";

export default function Product({ product }) {
  console.log(product);
  const { name, category, image, price } = product;
  return (
    <div className="card flex-column card-vert">
      <img src={image} className="card-img-vert" />
      <div className="card-body">
        <a className="card-title" href="#card">
          {name}
        </a>
        <span className="card-subtitle">{category}</span>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <div className="price-container">
          <span className="discount-price">{price}</span>
        </div>
        <button
          href="#"
          className="btn persian-blue-bg white-text-color btn-card btn-size"
        >
          <span className="material-icons card-btn-icon">shopping_cart</span>
          <p className="">Move to cart</p>
        </button>
      </div>
    </div>
  );
}
