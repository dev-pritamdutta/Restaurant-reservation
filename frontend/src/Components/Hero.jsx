import React from "react";
import bgImg from "../assets/menu4.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <p className="mb-5 uppercase text-2xl tracking-widest text-warning">
          Where Luxury meets dinner
          </p>
          <h1 className="mb-5 text-4xl md:text-6xl font-bold uppercase subpixel-antialiased">Chillox Restro</h1>
          <Link to="/reservation"  className="btn px-10 btn-warning text-black">Book a Table</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
