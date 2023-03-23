import React, { useState, useEffect } from "react";
import { Pizza, Coffee, fastFoodProduct } from "../../asset/data/product";
import ProductCard from "../ProductCard/ProductCard";
import "./Menupack.css";
const MenuPack = () => {
  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(fastFoodProduct);
  useEffect(() => {
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProduct);
    }
    if (filter === "RICE-MENU") {
      setProducts(fastFoodProduct);
    }
    if (filter === "PIZZA-MENU") {
      setProducts(Pizza);
    }
    if (filter === "COFFEE-MENU") {
      setProducts(Coffee);
    }
    if (filter === "DESSERT-MENU") {
      setProducts(fastFoodProduct);
    }
  }, [filter]);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-4">
            <h3 id="menu-title">Our Designs</h3>
          </div>
          <div className="col-lg-12 text-center mb-4">
            <button
              className="filter-btn btn btn-warning m-sm-1 active_btn"
              onClick={() => setFilter("FAST-FOOD")}
            >
              Chair & Table
            </button>
            <button
              className="filter-btn btn btn-warning m-sm-1"
              onClick={() => setFilter("RICE-MENU")}
            >
              Bed Design
            </button>
            <button
              className="filter-btn btn btn-warning m-sm-1"
              onClick={() => setFilter("PIZZA-MENU")}
            >
              Dressing Table
            </button>
            <button
              className="filter-btn btn btn-warning m-sm-1"
              onClick={() => setFilter("DESSERT-MENU")}
            >
              Sofa & Daining
            </button>

            <button
              className="filter-btn btn btn-warning m-sm-1"
              onClick={() => setFilter("COFFEE-MENU")}
            >
              Other Furniture
            </button>
          </div>
          {products.map((item) => (
            <div className="col-lg-3" key={item.id}>
              {" "}
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuPack;
