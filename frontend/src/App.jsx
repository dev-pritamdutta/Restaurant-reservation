import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import ReservationForm from "./Components/ReservationForm";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./pages/Register";

export const backendUrl = "https://restaurant-reservation-1-dscy.onrender.com";

const App = () => {
  return (
    <div className="bg-white text-black">
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/reservation"
          element={
            <ProtectedRoute>
              <ReservationForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
