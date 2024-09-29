import mongoose, { Schema } from "mongoose";

const AppointSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  doctorid:{
    type:mongoose.Types.ObjectId,
    ref:'Doctor'
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Name is required"],
  },
  phone:{
    type:String,

  },
  email:{
    type:String,
  },
  isconfirm: {
    type: Boolean,
    default: false,
  },
  date:{
    type:Date,
    required:[true,"Date is required"]
  },
  doctorName: {
    type: String,
  },
  problem: {
    type: String,
    required: true,
  },
  
});

const Appoint=mongoose.model("Appoint",AppointSchema)

export default Appoint