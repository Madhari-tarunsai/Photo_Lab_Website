const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    des: { type: String },
    cost: { type: String},
    // image: { type: String }, 
});
const photoData=mongoose.model("photo",photoSchema)
module.exports= photoData