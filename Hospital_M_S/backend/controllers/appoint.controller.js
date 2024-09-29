import appointmentHtml from "../Emails/html/doctor.js";
import sendemail from "../Emails/SendEmail.js";
import Appoint from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import User from '../models/user.js'

const bookAppointment=asyncHandler(async(req,res)=>{
    const { d_id, name, age, date, doctorName, problem,phone } = req.body;
    if (!d_id || !name || !age || !date || !doctorName || !problem) {
        throw new ApiError(401, "All fields are required");
    }
    
    const doctor = await Doctor.findById(d_id);
    if (!doctor) {
        throw new ApiError(400, "No doctor found");
    }
    
    if (doctor.date.includes(date)) {
        throw new ApiError(400, "Invalid date as Date is already booked");
    }
    
    const appoint = await Appoint.create({
        doctorid: d_id,
        name,
        age,
        doctorName,
        problem,
        date,
        phone,
        email:req.user.email,
        user:req.user._id                
    });
    
    doctor.date.push(date);
    await doctor.save();
    const html=appointmentHtml(doctorName,problem,date)
    await sendemail(req.user.email,'Appointment Conformation',html)
    
   
    const updatedDoctor = await Doctor.findById(d_id);
    
    return res.status(200).json(
        new ApiResponse(
            200,
            "Appointment Booked Successfully",
            {
                appoint: appoint,
                doctor: updatedDoctor
            }
        )
    );
    
})


const getAppointmentofUser=asyncHandler(async(req,res)=>{
    const id=req.params.id
     const patient=await Appoint.findById(id)
    if(!patient){
        throw new ApiError(400,"No patient found")
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            "Appointment found",
            patient
        )
    )
})

export {bookAppointment,getAppointmentofUser}