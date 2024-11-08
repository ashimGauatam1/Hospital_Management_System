import mongoose, { Schema } from "mongoose";

const AppointSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  doctorid: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  appointmentId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Name is required"],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  isconfirm: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  doctorName: {
    type: String,
  },
  problem: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
  },
  lab: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sampleType: String,
    charge: Number,
    Additional: String,
    status:{type:String,default:"pending"},
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appoint' }
}]

});

const Counter = mongoose.model(
  "Counter",
  new Schema({ sequenceValue: { type: Number, default: 100000 } })
);

AppointSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      {},
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );

    this.appointmentId = `APPOINT-${counter.sequenceValue}`;
  }
  next();
});

const Appoint = mongoose.model("Appoint", AppointSchema);

export default Appoint;
