import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const doctorSchema = new Schema({
  doctorid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  name:{
    type:String
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
  },
  specialization: {
    type: String,
    required: true,
  },
  date: [{ type: String }],
});

doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

doctorSchema.methods.checkingPassword = function (password) {
  const user = bcrypt.compare(password, this.password);
  return user;
};

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
