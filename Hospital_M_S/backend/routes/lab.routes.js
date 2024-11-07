import { Router } from "express";
import verifyUser from "../middlewares/auth.middleware.js";
import { requestLabReport } from "../controllers/lab.controller.js";
const router=Router()

router.route('/request/:id').post(verifyUser,requestLabReport)


export default router