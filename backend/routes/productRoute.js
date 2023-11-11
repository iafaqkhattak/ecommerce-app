const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProducts,
  getProductDetails,
} = require("../controllers/productController");

const router = express.Router();
// create routes here

// Get all products
router.route("/products").get(getAllProducts);

//Create Products
router.route("/products/new").post(createProduct);

//update, delete & getProduct Details
router
  .route("/products/:id")
  .put(updateProducts)
  .delete(deleteProducts)
  .get(getProductDetails);

module.exports = router;
