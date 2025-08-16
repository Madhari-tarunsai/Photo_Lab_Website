import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PublicLayout from "./Layouts/PulicLayout";
import AdminLayout from "./Layouts/AdminLayout";

import Home from "./Dashboards/UserdashBoard/Home/Home"; // Import Home
import AdminLogin from "./Pages/Login/AdminLogin";
import AdminRegister from "./Pages/Register/AdminRegister";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} /> 
          {/* You can add more public pages like About, Services, etc. here */}
        </Route>

        {/* Admin routes */}
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister />} />
          <Route path="dashboard" element={<AdminLayout />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
