import express from "express";
import User from "../Schemas/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserAuth from "../middleware/UserFetch.js";
import sendEmail from "../middleware/Gmail.js";
import Doctor from "../Schemas/Doctors.js";
import DocotorAuth from "../middleware/Doctormiddleware.js";
import Appoint from "../Schemas/Appointment_form.js";

const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(404).json("User Already Exists");
    }

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    const otp = Math.floor(Math.random() * 900000) + 100000; // otp generate
    console.log(otp);
    const htmlbody=`
     <h1>OTP Verification</h1>
        Dear <p class='text-red-600 font-bold'> ${name},</p>
        <p>Thank you for registering with us. To complete your registration, please use the following OTP code:</p>
        <div class="text-cyan-900 font-bold">${otp}</div>
        <p>This code is valid for the next 10 minutes. If you did not request this, please ignore this email.</p>
        <p>If you have any questions or need further assistance, feel free to <a href=${"http://localhost:5173/contact"}>contact us</a>.</p>
        <div class="footer">
            <p>Best regards,<br class='text-green-600'>The City Hospital Team</p>`
     const sentmail=await sendEmail(
      email,
      "otp verification",
      htmlbody
    )
    const user = new User({
      name,
      email,
      password: newPass,
      otp,
    });  
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send({ errors: error });
  }
});

router.post('/verify',async(req,res)=>{
  try {
    const user = await User.findOne({ otp: req.body.enteredOtp });
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    console.log(user.otp);
    console.log(req.body.enteredOtp)
    await user.save();
    return res.json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

})

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  const pass = await bcrypt.compare(password, user.password);

  if (!pass) {
    return res.status(404).send("Incorrect Password");
  }

  const data = {
    id: user._id,
  };

  const token = jwt.sign(data, process.env.SCRT_KEY, {
    expiresIn: "1d",
  });

  console.log(token);
  res.json({ token, name: user.name,type:user.type });
});

// Get user route
router.get("/getuser", UserAuth, async (req, res) => {
  const user = await req.user.id;

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  const users = await User.findById(user).select("-password");

  if (!users) {
    return res.status(404).send("User Not Found");
  }

  res.send(users);
});

// Update user type route
router.put("/update-type", UserAuth, async (req, res) => {
  const userId = req.user.id;
  const { type } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User Not Found");
    }

    user.type = type;
    await user.save();

    res.send({ message: "User type updated successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: error });
  }
});

router.get('/getdata',async(req,res)=>{
  try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
}
})

router.put('/update/:userId',async(req,res)=>{
  try {
    const { userId } = req.params;
    const updatedData = req.body;
  console.log(userId)
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
} catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
}
})

router.delete('/delete/:userId',async(req,res)=>{
  try {
    const { userId } = req.params;

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
} catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
}
})


//doctors register
router.post("/registerdoctor", async (req, res) => {
  try {
    const { name, DoctorsID, password,specialty } = req.body;
    const existingUser = await Doctor.findOne({ DoctorsID: req.body.DoctorsID });

    if (existingUser) {
      return res.status(404).json("Doctor Already Exists");
    }
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    const newdoctor=new Doctor({
      name,
      DoctorsID,
      password:newPass,
      specialty
    })
    await newdoctor.save();
    res.json(newdoctor)
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
}})
// doctor login
router.post('/doctorlogin',async(req,res)=>{
  const {DoctorsID,password}=req.body;
  const doctorid=await Doctor.findOne({DoctorsID:DoctorsID})
  if(!doctorid){
    return res.status(404).json("Invalid credentials");
  }
  const matchpass=await bcrypt.compare(password,doctorid.password);
  if(!matchpass){
    return res.status(404).json("Invalid credentials");
  }
  const data = {
    id: doctorid._id,
  };

  const token = jwt.sign(data, process.env.SCRT_KEY, {
    expiresIn: "1d",
  });

  console.log(token);
  res.json({ token, name: doctorid._id });
 
})

// patient list
router.get('/patientlist',DocotorAuth,async(req,res)=>{
  const doctor = req.doctor.id;
  if (!doctor) {
    return res.status(401).send('Unauthorized');
  }
  const data = await Appoint.find({ doctorId: doctor });
 
  res.send(data);})

export default router;
