import mongoose from "mongoose";
import { config } from "dotenv";
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

export default connectDB