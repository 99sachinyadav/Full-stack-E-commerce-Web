import userData from "../models/usermodel.js"
import validator from "validator"
import bycrpt from "bcrypt"

import jwt from "jsonwebtoken";


const createToken = (id)=>{
    const jwtToken = jwt.sign({id},process.env.JWT_SECRET)
    return jwtToken;
}


const registerUser = async (req,res)=>{
try {
    
        const {name,email,password}=req.body
            
        if(!name){
            return res.json({message:"please enter the name"})
        }
        if(!email){
            return res.json({message:"please enter the email "})
        }
        if(!password){
            return res.json({message:"please enter the password "})
        }
    
        const existedUser = await userData.findOne({
            $or:[{email},{password}]
        })
        if(existedUser){
            return res.json( {sucess:false, message:"User already exist"}) 
        }
        //validating the user email
        if(!validator.isEmail(email)){
            return res.json({sucess:false,message:"please enter a valid email"}) 
        }
        if(password.length < 8){
            return res.json({sucess:false,message:"password should contain atleast 8 chracter"}) 
        }
        // hasing the password using  the the bcrypt package
    
         const salt = await bycrpt.genSalt(10)
         const hashedpassword = await bycrpt.hash(password, salt);
    
          const newuser = new  userData({
             name, 
             email,
             password:hashedpassword
          })
    
    
          const saveduser = await newuser.save();
         
    
          // generating the token for validating the user
          const token = createToken(saveduser._id);
    
          res.status(200).json({sucess:true,message:'user is created in the database',token})
    
} catch (error) {
     console.log(error)
     res.status(400).json({sucess:false,message:'server error'})
}
  
  

}


const loginUser = async (req,res)=>{

     try {
        const {email, password}=req.body;
        if(!email){
            return res.json({message:"please enter the email "})
        }
        if(!password){
            return res.json({message:"please enter the password "})
        }
        const finduser=  await userData.findOne({email});
        if(!finduser){
          return res.status(400).json({message:"user doesn't exist"})
        }
        else{
            const comparepassword = await bycrpt.compare(password,finduser.password)
                if(!comparepassword){
                    return res.json({sucess:false, message:"Invalid user credentials"});
                }
                else{
                    const refreshToken = createToken(finduser._id)
                    return res.json({sucess:true ,message:"user accessed",refreshToken})
                }
        }

     } catch (error) {
         console.log(error)
         return res.status(504).json({message:"Internal server error"})
     }

}
const  adminLogin = async (req,res)=>{
     
   try {
     const {email, password}=req.body;
     if(email===process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
        const admintoken=  jwt.sign(email+password,process.env.JWT_SECRET)
         return res.json({sucess:true,admintoken})
     }
     else{
         return res.json({sucess:false, message:"Invalid admin credentials"})
     }
   } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
   }
}
 export {registerUser,loginUser,adminLogin}