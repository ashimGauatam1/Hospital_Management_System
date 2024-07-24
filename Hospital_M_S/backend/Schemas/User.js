import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type:{
    type:String,
    default:"user"
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User=mongoose.model("User", UserSchema);
export default User;
