import React from "react";

export default function Product({ product }) {
  console.log(product);
  const { name, category, image, price, available } = product;
  return (
    <div className="card flex-column card-vert">
      <span class="badge square-badge persian-blue-bg p-1">
        <span class="white-text-color">
          {available ? "In Stock" : "Out Of Stock"}{" "}
        </span>
      </span>

      <img src={image} className="card-img-vert" />
      <div className="card-body">
        <a className="card-title">{name}</a>
        <span className="card-subtitle">{category}</span>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <div className="price-container">
          <span className="discount-price">Rs{price}</span>
        </div>
      </div>
    </div>
  );
}
