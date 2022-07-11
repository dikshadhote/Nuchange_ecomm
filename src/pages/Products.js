import React, { useState, useEffect } from "react";
import { Navbar, Product } from "../components";
import { products } from "../db/products";

export default function Products() {
  const categories = ["Fruits", "Vegetables"];
  const [currentTag, setCurrentTag] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  useEffect(() => {
    setSortedProducts(products);
  }, []);

  const sortByTag = (products, categoryName) => {
    let filterArr = products.filter((product) => {
      const category = product.category.toLowerCase();
      const selectedCategory = categoryName.toLowerCase();
      if (category === selectedCategory) {
        return product;
      }
    });
    setSortedProducts(filterArr);
  };

  return (
    <div>
      <Navbar />

      <div className="mt-3 mb-1 ml-5 mr-5 gray-border-chip-container pb-2 pt-2">
        <span className="card-category-txt  cursor-pointer font-weight-bold p-1 ml-2">
          Filter By Category:
        </span>
        {categories.map((category, idx) => {
          return (
            <span
              className={
                currentTag === category
                  ? "card-category-txt  cursor-pointer tag link-active p-1 ml-2"
                  : "card-category-txt  cursor-pointer tag p-1 ml-2"
              }
              key={`cat${idx}`}
              onClick={() => {
                sortByTag(products, category);
                setCurrentTag(category);
              }}
            >
              {category}
            </span>
          );
        })}
      </div>
      <div className="d-flex flex-justify-center align-items-stretch flex-wrap">
        {sortedProducts.map((product) => {
          return <Product product={product} id={product.id} />;
        })}
      </div>
    </div>
  );
}
