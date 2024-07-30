import mongoose from "mongoose";
const { Schema } = mongoose;

const AppSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    doctorId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
    },
    name: {
        type: String,
        required: true
      },
      phone: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      doctorName:{
        type:String
      },
      date: {
        type: Date,
        default: Date.now()
      },
      time: {
        type: String,
        required: true
      },
      problem: {
        type: String,
        required: true
      },
      response:{
        type:String
      },
      medicine:{
        type:String
      }
})

const Appoint =mongoose.model('Appoint',AppSchema)

export default Appoint;
