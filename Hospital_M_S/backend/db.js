import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURI=process.env.MONGO_URI;

const ConnectToDB=async ()=>{
    try {
        await mongoose.connect(MongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}
export default ConnectToDB;