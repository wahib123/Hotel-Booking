const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/HotelDB",{useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully connected to db");
    }
})
const hotelSchema = new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    country:{type:String, required:true},
    room:{type:Array,required:true},
})

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;