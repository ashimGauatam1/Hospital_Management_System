import asyncHandler from "../utils/AsyncHandler.js";
import ApiError from '../utils/ApiError.js'
import Doctor from '../models/doctor.js'
import ApiResponse from '../utils/ApiResponse.js'
import uploadOnCloud from "../utils/cloudinary.js";
import Appoint from "../models/appointment.js";


const registerDoctor=asyncHandler(async(req,res)=>{
    const {doctorid,password,specialization,email} =req.body
    if(
        [doctorid,password,specialization].some((field)=>{
            field.trim()==''
        })
    ){
        throw new ApiError(400,"All fields are required")
    }
    const doctor=await Doctor.findOne({doctorid})
    if(doctor){
        throw new ApiError(400,"Doctor with doctor id is present")
    }
    const photopath=req.files?.photo[0]?.path
    if(!photopath){
        throw new ApiError(400,"Could not find the photo")
    }
    const photo=await uploadOnCloud(photopath)
    if(!photo){
        throw new ApiError(400,"Couldnot upload photo")
    }
    
    const createdUser=await Doctor.create({
        doctorid,
        password,
        email,
        specialization,
        photo:photo.url
    })
    await createdUser.save();
    return res.status(200).json(
        new ApiResponse(
            200,
            "doctor registed successfully",
            {
                "doctor":createdUser
            }
        )
    )
})


const doctorLogin=asyncHandler(async(req,res)=>{
    const {doctorid,password}=req.body;

    if(!doctorid,!password){
        throw new ApiError(401,"all fields are required")
    }
    const doctor=await Doctor.findOne({doctorid})
    if(!doctor){
        throw new ApiError(400,"Cannot fins a doctor")
    }
    const loggedDoctor=await doctor.checkingPassword(password)
    if(!loggedDoctor){
        throw new ApiError(400,"Invalid credentials")
    }
    
    return res.status(200).json(
        new ApiResponse(
            200,
            "Doctor login success",
           {"id":doctor._id,
            "photo":doctor.photo
           }
        )
    )
})


const getAppointments=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const doctor=await Doctor.findById(id)
    if(!doctor){
        throw new ApiError(400,"Invalid id")
    }
    const appointList=await Appoint.find({doctorid:id})
    if(!appointList){
        throw new ApiError(400,"No appointments")
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            "Appointments",
            {
                "Appointments":appointList
            }
        )
    )

})



export {registerDoctor,doctorLogin,getAppointments}