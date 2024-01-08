import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCards";

export default function Shop() {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  // fetch data from api
  return (
    <div>
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}
