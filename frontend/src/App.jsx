import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
