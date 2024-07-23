import express from "express";
const router = express.Router();
import User from "../Schemas/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserAuth from "../middleware/UserFetch.js";
router.post("/register", async (req, res) => {
  
  try {
    const { name, email, password } = req.body;
    const extingishUser = await User.findOne({ email: req.body.email });
    if (extingishUser) {
      return res.status(404).send("User Already Exists");
    }
    const salt = await bcrypt.genSalt(10);
    const newpass=await bcrypt.hash(password,salt);
    
    const user = new User({
      name:name,
      email:email,
      password:newpass,
     
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send({ errors: error });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(404).send("User Not Found");
    }
    const pass=await bcrypt.compare(password,user.password);
    if(!pass){
        return res.status(404).send("Incorrect Password");
    }
    res.json({user});
    const data={
        id:user._id,
    }
    const token = jwt.sign(data,process.env.SCRT_KEY);
 
})

router.get("/getuser",UserAuth,async(req,res)=>{
    const user=await req.user.id;
   if(!user){
       return res.status(404).send("User Not Found");
   }
    const users=await User.findById(user).select("-password");
   if(!users){
       return res.status(404).send("User Not Found");
   }
   res.send(users);
})


export default router;
