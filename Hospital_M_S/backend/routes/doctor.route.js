import { Router } from "express";
import {
  doctorLogin,
  getAppointments,
  registerDoctor,
} from "../controllers/doctor.controller.js";
import upload from "../middlewares/multer.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  registerDoctor
);

router.route("/login").post(doctorLogin);
router.route('/appointment/:id').get(getAppointments)



export default router;
