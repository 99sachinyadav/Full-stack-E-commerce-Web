import jwt from "jsonwebtoken"


const Authadmin = async (req,res,next)=>{
    
    try {
        const {admintoken} = req.headers;
           //console.log(admintoken)
        if(!admintoken){
            return res.json({sucess:false,message:"UnAuthorised request"})
           
        }
        else{
            const token_decode= jwt.verify(admintoken,process.env.JWT_SECRET)  // used for decode the emeil and password
             if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
                    return  res.status(404).json({sucess:false,message:"not authorised login again"})
             }
             next();
        }

    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
    }


}

export default Authadmin