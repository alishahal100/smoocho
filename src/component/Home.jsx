import React from "react";
import Navbar from "../component/Navbar";
import Banner from "./Banner";
import About from "./About";
import Products from "./Products";
import Footer from "./Footer";
import Branches from "./BranchLocations";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <Products/>
      {/* <div className=" flex flex-col items-center justify-center w-[100vw] gap-6 h-[100vh]">
        <h1 className=" text-xl lg:text-2xl font-bold mb-10 text-center">Our Branches</h1>

      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1-jzMVJvIOyWmDLsh2H2zEs1QYj4QfHc&ehbc=2E312F" style={{marginLeft:"auto",marginRight:"auto"}} width="90%" height="480"></iframe>
      </div> */}
      <Branches/>
      <Footer/>
    </div>
  );
};

export default Home;
