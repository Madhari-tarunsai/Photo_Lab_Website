import React from 'react';
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './Pages/Dashboard/Login/AdminLogin';
import AdminRegister from './Pages/Dashboard/Register/AdminRegister';
import Homebar from './Pages/Admindashboard/HomeBar/Homebar';
import Postdetails from './Postdetails/Postdetails';
// import Homepage from './Pages/Admindashboard/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />

        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard" element={<Homebar />}/>
        <Route path='dashboard/posts' element={<Postdetails/>}/>
      </Routes>

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
