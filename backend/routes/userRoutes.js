const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgetPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateUserProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticated, isAuthorizedRole } = require("../middleware/auth");

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout/user").get(logOutUser);
router.route("/me").get(isAuthenticated, getUserDetails);
router.route("/password/update").put(isAuthenticated, updatePassword);
router.route("/me/update").put(isAuthenticated, updateUserProfile);
router
  .route("/admin/users")
  .get(isAuthenticated, isAuthorizedRole("user"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthenticated, isAuthorizedRole("user"), getSingleUser)
  .put(isAuthenticated, isAuthorizedRole("user"), updateUserRole)
  .delete(isAuthenticated, isAuthorizedRole("user"), deleteUser);

module.exports = router;
