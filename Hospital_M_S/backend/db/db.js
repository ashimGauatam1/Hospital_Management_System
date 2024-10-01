import mongoose from "mongoose";
import { config } from "dotenv";
import cron from 'node-cron';
import Doctor from "../models/doctor.js";
config()

const MONGO_URL=process.env.MONGO_URL


const connectDB=async()=>{
    try {
        mongoose.connect(MONGO_URL,{
            dbName:"just-try"
        })
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

cron.schedule('1 0 * * *', async () => {
    try {
      const today = new Date();
      const todayString = today.toISOString().split('T')[0];
  
      await Doctor.updateMany(
        { date: { $regex: new RegExp(`^${todayString}`) } },
        { $pull: { date: { $regex: new RegExp(`^${todayString}`) } } }
      );
  
      console.log(`Removed today's date (${todayString}) from all doctors.`);
    } catch (error) {
      console.error('Error removing today\'s date:', error);
    }
  });

export default connectDB