import { Router } from "express";
import { bookAppointment, getAppointmentofUser } from "../controllers/appoint.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";
const router =Router()



router.route('/book').post(verifyUser,bookAppointment)
router.route('/getuser/:id').get(getAppointmentofUser)

export default router