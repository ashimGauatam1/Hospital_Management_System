import { Router } from "express";
import {
  changePassword,
  getHistory,
  getUser,
  loginUser,
  logoutUser,
  RegisterUser,
  resendEmail,
  updateUser,
  verifyOpt,
} from "../controllers/user.authController.js";
import upload from "../middlewares/multer.js";
import verifyUser from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "profile",
      maxCount: 1,
    },
  ]),
  RegisterUser
);

router.route("/verify/:id").post(verifyOpt);
router.route("/login").post(loginUser);
router.route("/resend/:id").post(resendEmail);
router.route("/changepass/:id").post(changePassword);

router.route("/getuser").get(verifyUser, getUser);
router.route("/logout").post(verifyUser, logoutUser);
router.route('/update').post(updateUser)
router.route('/gethistory/:id').get(getHistory)



export default router;
