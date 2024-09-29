import { Router } from "express";
import { bookAppointment } from "../controllers/appoint.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";
const router =Router()



router.route('/book').post(verifyUser,bookAppointment)


export default router