import { Router } from "express";
import { bookAppointment, checkedAppointments, getAppointmentofUser, pharmacy, updateAppointment } from "../controllers/appoint.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";
const router =Router()



router.route('/book').post(verifyUser,bookAppointment)
router.route('/getuser/:id').get(getAppointmentofUser)
router.route('/checked/:id').post(checkedAppointments)
router.route('/update').post(updateAppointment)
router.route('/pharmacy/:id').get(pharmacy)

export default router