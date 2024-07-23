import jwt from 'jsonwebtoken';

const UserAuth=async(req,res,next)=>{
    try {
        const token =req.header('auth-token');
        
        if(!token){
            return res.status(401).send("Access Denied");
        }
        const data= jwt.verify(token,process.env.SCRT_KEY);
    
        if(!data){
            return res.status(401).send("Access Denied");
        }
        req.user=data;
        next();
    } catch (error) {
        console.log(error);
        res.send({ errors: error });
    }
}

export default UserAuth