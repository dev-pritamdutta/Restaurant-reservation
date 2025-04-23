import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="text-center py-10">
        <h2 className="text-3xl text-amber-600 font-bold">
          Need Update On Latest Offers?
        </h2>
        <p className="footer-title my-5">Subscribe to our newsletter</p>
        <form className="flex justify-center items-center rounded-2xl">
          <fieldset className="w-80">
            <div className="join">
              <input
                type="text"
                placeholder="enter your email address"
                className="input input-bordered border-1 border-amber-200 bg-none placeholder:text-white text-white join-item"
              />
              <button className="btn  btn-warning join-item">Join Now</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="flex justify-between item-center">
        <nav>
          <h2 className="text-3xl text-amber-600 font-bold">Chillox Resto</h2>
          <p className="text-gray-500 text-sm mb-3">The best place to chill</p>
          <div className="flex gap-4">
            <FaFacebook className="text-2xl cursor-pointer text-amber-600" />
            <FaYoutube className="text-2xl  cursor-pointer text-amber-600" />
            <FaInstagram className="text-2xl  cursor-pointer text-amber-600" />
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
      </div>

      <aside>
        <p className="text-center mt-10 text-gray-500">
          Copyright © {new Date().getFullYear()} - All right reserved by Chillox
          Restro
        </p>
      </aside>
    </div>
  );
};

export default Footer;
