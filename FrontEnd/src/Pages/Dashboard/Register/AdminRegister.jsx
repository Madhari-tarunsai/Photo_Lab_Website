import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminRegister() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.password) {
      setMessage("All fields are required");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:2000/api/admin/register",
        form
      );

      if (data.success) {
        // ✅ Toast notification instead of alert
        toast.success("Registration successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 2000,
        });

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Register Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Error message */}
      {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}

      <p style={{ marginTop: "10px" }}>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default AdminRegister;
