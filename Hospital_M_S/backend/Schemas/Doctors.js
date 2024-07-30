import mongoose  from "mongoose";
const {Schema} = mongoose

const DoctorSchema=new Schema ({
   name:{
    type:String,
    required:true
   },
   DoctorsID:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   specialty:{
    type:String,
    required:true
   }
})


const Doctor=mongoose.model('Doctor',DoctorSchema);

export default Doctor;