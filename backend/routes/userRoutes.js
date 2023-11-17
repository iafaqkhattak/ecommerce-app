const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgetPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout/user").get(logOutUser);
router.route("/me").get(isAuthenticated, getUserDetails);
router.route("/updatePassword").put(isAuthenticated, updatePassword);
module.exports = router;
