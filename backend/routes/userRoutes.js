const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/logout/user").get(logOutUser);

module.exports = router;
