import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const products = [
  {
    name: "Chocolate Fruits",
    description: "Fresh fruits coated in luscious chocolate.",
    image: "/Banner.png",
  },
  {
    name: "Chocolate Shots",
    description: "Velvety chocolate, a quick indulgence.",
    image: "/shots.jpg",
  },
  {
    name: "Chocolate Brownies",
    description: "Fudgy brownies with chocolate glaze.",
    image: "/brownie.jpg",
  },
];

const ProductCard = ({ product }) => {
  const cardRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.in",
        }
      );
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        ref(el);
        cardRef.current = el;
      }}
      className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-[#4e3012] to-[#2a1b0a] text-white"
    >
      <div
        className="group"
        onMouseEnter={() => {
          gsap.to(cardRef.current, {
            scale: 1.05,
            rotate: 1,
            duration: 0.9,
            ease: "power3.out",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
          });
        }}
        onMouseLeave={() => {
          gsap.to(cardRef.current, {
            scale: 1,
            rotate: 0,
            duration: 0.9,
            ease: "power3.out",
            boxShadow: "none",
          });
        }}
      >
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
    <div className="w-screen h-auto mt-10 mx-auto px-5 lg:px-20 py-10">
      <h1 className="text-xl lg:text-2xl font-bold mb-10 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
