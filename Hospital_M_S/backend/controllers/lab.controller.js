import Appoint from "../models/appointment.js";
import LabReport from "../models/labreport.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

const requestLabReport = asyncHandler(async (req, res) => {
    const appointmentId = req.params.id;
    const appointment = await Appoint.findOne({ appointmentId });
    if (!appointment) {
        throw new ApiError(400, "No appointments found");
    }

    const { sampleType, charge, Additional } = req.body;

    appointment.lab.push({
        user: req.user._id,
        sampleType,
        charge,
        Additional,
        appointment: appointment._id
    });

    await appointment.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            "New lab request added",
            appointment.lab[appointment.lab.length - 1]  
        )
    );
});

const getAllReports = asyncHandler(async (req, res) => {
    try {

        const reports = await Appoint.find({ "lab.status": "pending" }, { lab: 1, name: 1, date: 1 })
        .populate("lab.user", "name email") 
        .populate("lab.appointment", "appointmentId") 
        .exec();
      const filteredReports = reports.map((appointment) => ({
        lab: appointment.lab.filter((report) => report.status === "pending"),
      }));
      
      res.status(200).json({
        success: true,
        data: filteredReports,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve lab reports",
      });
    }
});

const submitReport=asyncHandler(async(req,res)=>{
    const { user, appointment, sampleType, data } = req.body;

    if (!user || !appointment || !sampleType || !data) {
      throw new ApiError(400,"all fields are required")
    }

    const labReportData = {
      user,
      appointment,
      sampleType,
    };

    if (sampleType === 'blood') {
      labReportData.bloodAnalysis = data;
    } else if (sampleType === 'stool') {
      labReportData.stoolAnalysis = data;
    } else {
      throw new ApiError(401,"invalid sample type")
    }

    const labReport = new LabReport(labReportData);
    labReport.status="completed"
    // await labReport.save();

    res.status(201).json(
      new ApiResponse(
        200,
        "lab report get submitted",
        labReport
      )
    );
 
})

export {requestLabReport,getAllReports,submitReport}