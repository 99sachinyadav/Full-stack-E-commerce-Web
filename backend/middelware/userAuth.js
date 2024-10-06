import jwt from "jsonwebtoken"

const AuthUser = async(req,res,next)=>{

    const {token}=req.headers;

    if(!token){
        return res.json({sucess:false,message:"Unauthorized request"})
    }
    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        //console.log(decodedToken)
         req.body.userId =decodedToken.id  //here we have ti extract id from the decoded token { id: '66fd67370cceb2d865ec1797', iat: 1727920847 }
         next()
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"Something Went Wrong"})
    }
}

 export default AuthUser