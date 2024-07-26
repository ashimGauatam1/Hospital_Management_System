import express from "express";
import User from "../Schemas/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserAuth from "../middleware/UserFetch.js";

const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(404).send("User Already Exists");
    }

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: newPass,
    });

    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send({ errors: error });
  }
});

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

export default router;
