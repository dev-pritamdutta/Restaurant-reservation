import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import ReservationForm from "./Components/ReservationForm";

export const backendUrl = "http://localhost:4000";
const App = () => {

  
  return (
    <div className="bg-white text-black">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationForm />} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
