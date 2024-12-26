import React, { useEffect, useRef } from "react";

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
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add("animate-card");
          } else {
            card.classList.remove("animate-card");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-[#4e3012] to-[#2a1b0a] text-white opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-t-lg transition-transform transform group-hover:scale-110 group-hover:rotate-1 duration-500 ease-in-out"
        />
        <div className="p-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h2>
          <p className="mt-2 text-sm lg:text-lg">{product.description}</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">Discover More</p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div id="products" className="w-screen h-auto mt-10 mx-auto px-5 lg:px-20 py-10">
      <h1 className="text-xl lg:text-2xl font-bold mb-10 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
