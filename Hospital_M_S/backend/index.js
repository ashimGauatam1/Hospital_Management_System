import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db.js";
import userRouter from './routes/user.auth.route.js'
import doctorRouter from './routes/doctor.route.js'
import appointRouter from './routes/appoint.route.js'
import cookieParser from "cookie-parser";
import cros from 'cros'

config()
const app=express()
app.use(express.json())
const port=process.env.PORT
connectDB();
app.use(cookieParser())

app.use(cros({
    origin:"http://localhost:5173",
    credentials:true
}
))

app.use('/api/v1/users',userRouter)
app.use('/api/v1/doctor',doctorRouter)
app.use('/api/v1/appoint',appointRouter)




app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})