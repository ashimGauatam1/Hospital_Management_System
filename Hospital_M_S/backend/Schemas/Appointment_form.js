import mongoose from "mongoose";
const { Schema } = mongoose;

const AppSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
      doctor:{
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
      }

})

const Appoint =mongoose.model('Appoint',AppSchema)

export default Appoint;
