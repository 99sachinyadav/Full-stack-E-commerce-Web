import {v2 as cloudinary} from 'cloudinary'


const connectcloudinary = async ()=>{
  
         cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key :process.env.CLOUDINARYAPI,
            api_secret:process.env.SECRETKEY,
         })


   console.log("cloudinary connected")
}

export default connectcloudinary