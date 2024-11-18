import { Router } from "express";
import verifyUser from "../middlewares/auth.middleware.js";
import { getAllReports, requestLabReport, submitReport } from "../controllers/lab.controller.js";
const router=Router()

router.route('/request/:id').post(verifyUser,requestLabReport)
router.route('/getreports').get(getAllReports)
router.route('/submit').post(submitReport)

export default router