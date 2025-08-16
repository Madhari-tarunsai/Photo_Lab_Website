import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // for navigation

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      toast.success(res.data.message);
      setFormData({ email: '', password: '' });

      // Redirect to admin dashboard after short delay
      setTimeout(() => {
        navigate("/admin/dashboard");; // change to your admin dashboard route
      }, 1500); // 1.5 seconds delay to show toast

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/admin/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
