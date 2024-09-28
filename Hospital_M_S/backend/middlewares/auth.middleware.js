import jwt from 'jsonwebtoken'
import asyncHandler from '../utils/AsyncHandler.js'
import ApiError from '../utils/ApiError.js'


const verifyUser=asyncHandler(async(req,res,next)=>{
   try {
     const token=req.cookies.refreshToken
     if(!token){
         throw new ApiError(400,"Invalid token")
     }
     const verified= jwt.verify(token,process.env.REFRESH_TOKEN_SCRT)
     if(!verified){
         throw new ApiError(401,"invalid access")
     }
     req.user=verified
     console.log(req.user);
     next();
   } catch (error) {
    console.log(error);
   }
})

export default verifyUser