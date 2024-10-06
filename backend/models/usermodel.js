import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
  
   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true,
   },
   password:{
    type:String,
    required:true,
    unique:true,
   },
   cartdata:{
    type:Object,
    default:{},
   }

},{timestamps:true ,minimize:false});

const userData = mongoose.model('userData',userSchema);

export default userData