import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";  // add Outlet
import "./Homebar.css";
import Homepage from "../Homepage/Homepage";

const Homebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">Admin_Panel</div>

        {/* Toggle button (mobile only) */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            
          {/* <Link to="home">Home</Link> */}
          <Link to="posts">Post_Details</Link>
          <button className="logout-btn">Logout</button>
        </nav>
      </header>

      {/* 👇 Nested routes (Homepage, Posts, etc.) will appear here */}
      <main className="content">
        <Outlet />
        <Homepage/>
      </main>
    </>
  );
};

export default Homebar;
