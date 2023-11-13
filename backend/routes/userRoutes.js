const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);

module.exports = router;
