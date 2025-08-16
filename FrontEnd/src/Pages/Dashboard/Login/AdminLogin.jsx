import React, { useState } from "react";
import axios from "axios";

function AdminLogin() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:2000/api/admin/login", form);
            localStorage.setItem("token", data.token);

            // Token ni default header lo store cheyyadam
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            setMessage("Login Successful!");
            window.location.href = "/dashboard"; // redirect to admin dashboard
        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AdminLogin;
