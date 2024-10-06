
// Add product to user cart

import userData from "../models/usermodel.js";

const AddtoCart = async (req,res)=>{
   const {userId,itemId,size} =req.body;

   try {
      const userdata = await userData.findById(userId)
      let cartdata= userdata.cartdata;

      if(cartdata[itemId]){
         if(cartdata[itemId][size]){
            cartdata[itemId][size]+=1;
         }
         else{
            cartdata[itemId][size]=1
         }
      }
      else{
         cartdata[itemId]={};
         cartdata[itemId][size]=1
      }

      await userData.findByIdAndUpdate(userId,{cartdata})

      res.json({sucess:true,message:"Item Added sucessfully"})

   } catch (error) {
    console.log(error)
    res.json({sucess:false,message:error.message})
   }
}

// Update product to user cart

const UpdateCart = async (req,res)=>{

   try {
      const {itemId,userId,size,quantity} = req.body
   
     const userdata = await userData.findById(userId)
      let cartdata=  userdata.cartdata
   
      cartdata[itemId][size]=quantity;
   
      await userData.findByIdAndUpdate(userId,{cartdata})
      res.json({sucess:true,message:"Item Updated sucessfully"})
   } catch (error) {
      console.log(error);
      res.json({sucess:false,message:error.message})
   }
  
    
}

// nget user cart data

const GetUserCart = async (req,res)=>{
    
   try {

      const {userId}=req.body

      const userdata = await userData.findById(userId);
      let cartdata= userdata.cartdata;
      console.log(cartdata)
      res.json({sucess:true,message:'Itemdata accessed',cartdata})
              
   } catch (error) {
      console.log(error);
      res.json({sucess:false,message:error.message})
   }

}

export {
    AddtoCart,
    UpdateCart,
    GetUserCart
}