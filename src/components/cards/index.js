import React, { useState, useEffect } from "react";
import { instance } from "../axios/api";
import Card from "../card";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await instance.get("/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full mx-8 grid grid-cols-1 sm:max-w-[560px] sm:grid sm:grid-cols-2 md:max-w-[688px] lg:max-w-[944px] xl:max-w-[1200px] 2xl:max-w-[1400px] md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 sm:gap-5">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
         
        />
      ))}
    </div>
  );
};

export default Cards;
