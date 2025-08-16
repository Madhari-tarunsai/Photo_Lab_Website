// src/Layouts/PublicLayout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./PublicNavbar.css"; // CSS for styling

const PublicNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="public-navbar">
      <div className="logo">MyWebsite</div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
    </header>
  );
};

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <main className="public-content">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
