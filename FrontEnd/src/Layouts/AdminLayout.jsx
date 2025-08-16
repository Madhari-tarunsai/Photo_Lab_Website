// src/Layouts/AdminLayout.jsx
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminLayout.css";

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("Bye! Tata 👋 See you soon!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      onClose: () => navigate("/admin/login"),
    });
    // Optional: clear auth tokens here
  };

  return (
    <>
      <ToastContainer />
      <header className="navbar">
        <div className="logo">Admin Panel</div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/admin/dashboard">Home</Link>
          <Link to="/admin/dashboard/posts">Post Details</Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
