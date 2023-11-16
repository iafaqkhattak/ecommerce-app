const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout/user").get(logOutUser);

module.exports = router;
