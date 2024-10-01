import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      required: [true, "Name is required"],
    },
    ismember: {
      type: Boolean,
      default: false,
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    profile: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: false,
    },
    role: {
      type: String,
      default: "patient",
    },
    otp: {
      type: Number,
      length: [6, "otp must be six digits"],
    },
    otp_expiry: {
      type: Date,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
    
   medicalHistory:[{
    problem:{
      type:String
    },
    response:{
        type:String,
    },
    medicine:{
      type:String
    },
    
      doctorname:{
        type:String
      
    },
    Date:{
      type:Date,
      default:Date.now
    }
   }]
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.ispasswordCorrect = async function (password) {
  const user = bcrypt.compare(password, this.password);
  return user;
};

UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SCRT,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SCRT,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", UserSchema);
export default User;
