const express=require("express")
const dotenv=require("dotenv").config()
const Connectedb=require("./Config/Database")
const router=require("./Router/PostRouter")
const path = require("path");
const cors = require('cors');
const adminRouter = require("./Router/AdminRouter");
const app=express()


// CORS Middleware
app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true

}));



// Middleware
app.use(express.json())
app.use(express.urlencoded())


// database calling
Connectedb()


// router_api
app.use("/api/admin", adminRouter);
app.use("/api/router",router)

// Static folder for uploads
// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// simple_api for wroking
app.get("/",(req,res)=>{
    res.json({message:"api is working succesfully"})
})


const PORT=process.env.PORT || 7000

app.listen(PORT,()=>console.log(`server is runing on port http://localhost:${process.env.PORT}`))