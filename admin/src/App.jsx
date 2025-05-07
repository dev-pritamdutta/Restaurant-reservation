// import React, { useEffect, useState } from 'react'
// import Login from './Components/Login'
// import Sidebar from './Components/Sidebar';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import {ToastContainer} from 'react-toastify';
// import AddMenu from './pages/AddMenu'
// import ListMenu from './pages/ListMenu';
// import AdminTable from './pages/AdminTable';

// export const backendUrl = "http://localhost:4000";

// const App = () => {

//   const [token, setToken] = useState(localStorage.getItem("token" || ""));
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);
//   return (
//     <div>
//       <ToastContainer/>

//       {
//         token === "" ?(<Login setToken={setToken} />) : (
//           <>
//           <div>
//             <Sidebar setToken={setToken} />
//             <div>
//               <Routes>
//                 <Route path="/add" element={<AddMenu token={token}/>} />
//                 <Route path="/list" element={<ListMenu token={token}/>} />
//                 <Route path="/table" element={<AdminTable token={token}/>} />
//               </Routes>
//             </div>
//           </div>
//           </>
//         )
//       }

//       <Login/>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddMenu from "./pages/AddMenu";
import ListMenu from "./pages/ListMenu";
import AdminTable from "./pages/AdminTable";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true }); // Use replace to prevent going back to the previous page
    } else {
      localStorage.setItem("token", token);
    }
  }, [token, navigate]);

  return (
    <div>
      <ToastContainer />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex">
          <Sidebar setToken={setToken} />
          <div className="flex-grow">
            <Routes>
              <Route path="/add" element={<AddMenu token={token} />} />
              <Route path="/list" element={<ListMenu token={token} />} />
              <Route path="/table" element={<AdminTable token={token} />} />
              
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
