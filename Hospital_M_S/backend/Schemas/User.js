import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String,
  },
  type:{
    type:String,
    default:''
  },
  otp:{
    type:String
  },
  role:{
    type:String,
    default:'patient'
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User=mongoose.model("User", UserSchema);
export default User;
