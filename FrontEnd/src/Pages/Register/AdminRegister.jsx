import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './AdminRegister.css';

const AdminRegister = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // for navigation

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/register', formData);
      toast.success(res.data.message);

      // Clear form
      setFormData({ name: '', email: '', password: '' });

      // Navigate to login page after a short delay
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register-page">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="register-card">
        <h2 className="register-title">Admin Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Name</label>
          </div>
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
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="already-account">
          Already have an account? <Link to="/admin/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
