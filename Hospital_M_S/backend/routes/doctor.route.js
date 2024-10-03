import { Router } from "express";
import {
  deleteDoctor,
  doctorLogin,
  getAppointments,
  getDoctors,
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
router.route('/getdoctors').get(getDoctors)
router.route('/delete/:id').delete(deleteDoctor)


export default router;
