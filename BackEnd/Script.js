const express=require("express")
const dotenv=require("dotenv").config()
const Connectedb=require("./Config/Database")
const router=require("./Router/PostRouter")
const app=express()

// database calling
Connectedb()

// router_api
app.use("/api/router",router)


// Middleware
app.use(express.json())
app.use(express.urlencoded())

// simple_api for wroking
app.get("/",(req,res)=>{
    res.json({message:"api is working succesfully"})
})


const PORT=process.env.PORT || 7000

app.listen(PORT,()=>console.log(`server is runing on port http://localhost:${process.env.PORT}`))