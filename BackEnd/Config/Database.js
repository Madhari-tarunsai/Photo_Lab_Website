const mongoose=require("mongoose")
const Connectedb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB,{dbName:process.env.DATABASE})
        console.log("Database is connected sucessfully...!")
        
    } catch (error) {
        console.log("DataBase is not connected please check the connection onces...!",error);
        
        
    }
}
module.exports=Connectedb