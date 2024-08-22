import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="w-screen h-auto mt-10 mx-auto px-5 lg:px-20 py-10 flex items-center justify-center flex-col">
      <h1 className="text-xl lg:text-2xl font-bold mb-10">Our Products</h1>
      <Slider {...settings} className="w-full">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-10 rounded-lg shadow-2xl bg-gradient-to-r from-[#4e3012] to-[#2a1b0a] text-white"
          >
            <div className="w-full flex items-center justify-center mb-5 lg:mb-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-60 h-60 object-cover rounded-lg shadow-lg transform rotate-[-45deg] hover:scale-105 transition-transform duration-500 ease-in-out mix-blend-multiply opacity-90"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold">{product.name}</h2>
              <p className="mt-4 text-sm lg:text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
