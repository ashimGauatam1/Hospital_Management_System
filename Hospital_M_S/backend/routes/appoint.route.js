import { Router } from "express";
import { bookAppointment } from "../controllers/appoint.controller.js";
const router =Router()



router.route('/book').post(bookAppointment)


export default router