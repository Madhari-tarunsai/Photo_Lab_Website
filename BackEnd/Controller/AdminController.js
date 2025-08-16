const Admin = require("../Models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER ADMIN
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "Admin registered successfully", admin: newAdmin });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// LOGIN ADMIN
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        // Generate token
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: "Login successful", token });
        
    } catch (error) {
        console.error(error);
        console.error("Login error:", error.message);

        res.status(500).json({ message: "Something went wrong", error });
    }
};

module.exports = { registerAdmin, loginAdmin };
