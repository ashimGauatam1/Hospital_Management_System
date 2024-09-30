import { Router } from "express";
import { bookAppointment, checkedAppointments, getAppointmentofUser } from "../controllers/appoint.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";
const router =Router()



router.route('/book').post(verifyUser,bookAppointment)
router.route('/getuser/:id').get(getAppointmentofUser)
router.route('/checked/:id').post(checkedAppointments)

export default router