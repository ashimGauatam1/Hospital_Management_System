import { Router } from "express";
import verifyUser from "../middlewares/auth.middleware.js";
import { getAllReports, requestLabReport } from "../controllers/lab.controller.js";
const router=Router()

router.route('/request/:id').post(verifyUser,requestLabReport)
router.route('/getreports').get(getAllReports)

export default router