import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Chocolate Fruits",
    description: "Fresh fruits coated in luscious chocolate.",
    image: "/1.jpg",
  },
  {
    name: "Chocolate Shots",
    description: "Velvety chocolate, a quick indulgence.",
    image: "/2.jpg",
  },
  {
    name: "Chocolate Brownies",
    description: "Fudgy brownies with chocolate glaze.",
    image: "/4.jpg",
  },
  {
    name: "Chocolate Brownies",
    description: "Fudgy brownies with chocolate glaze.",
    image: "/5.jpg",
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border border-pink-500 rounded-lg shadow-md bg-white text-gray-900 p-5"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl text-pink-500 font-bold mt-4">{product.name}</h2>
      <p className="text-pink-500 mt-2 text-sm">{product.description}</p>
    </motion.div>
  );
};

const Products = () => {
  return (
    <div
      id="products"
      className="w-screen h-auto mt-10 mx-auto px-5 lg:px-20 py-10"
    >
      <h1 className="text-xl lg:text-2xl font-bold mb-10 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
