const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProducts,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticated, isAuthorizedRole } = require("../middleware/auth");

const router = express.Router();
// create routes here

// Get all products
router.route("/products").get(getAllProducts);

//Create Products
router
  .route("/products/new")
  .post(isAuthenticated, isAuthorizedRole("admin"), createProduct);

//update, delete & getProduct Details
router
  .route("/products/:id")
  .put(isAuthenticated, isAuthorizedRole("admin"), updateProducts)
  .delete(isAuthenticated, isAuthorizedRole("admin"), deleteProducts)
  .get(getProductDetails);

module.exports = router;
