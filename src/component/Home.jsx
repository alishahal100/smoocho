import React from "react";
import Navbar from "../component/Navbar";
import Banner from "./Banner";
import About from "./About";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <Products/>
    </div>
  );
};

export default Home;
