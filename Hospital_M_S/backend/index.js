import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from 'cors';


config()
const app=express()
app.use(express.json())
const port=process.env.PORT
connectDB();
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


import userRouter from './routes/user.auth.routes.js'
import doctorRouter from './routes/doctor.routes.js'
import appointRouter from './routes/appoint.routes.js'
import labRouter from './routes/lab.routes.js'

app.use('/api/v1/users',userRouter)
app.use('/api/v1/doctor',doctorRouter)
app.use('/api/v1/appoint',appointRouter)
app.use('/api/v1/lab',labRouter)



app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})