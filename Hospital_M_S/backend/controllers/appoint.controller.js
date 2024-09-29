import appointmentHtml from "../Emails/html/doctor.js";
import sendemail from "../Emails/SendEmail.js";
import Appoint from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";


const bookAppointment=asyncHandler(async(req,res)=>{
    const { d_id, name, age, date, doctorName, problem } = req.body;
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
        user:req.user._id                
    });
    
    doctor.date.push(date);
    await doctor.save();
    const html=appointmentHtml(doctorName,problem,date)
    await sendemail("ashimgautam695@gmail.com",'Appointment Conformation',html)
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


export {bookAppointment}