const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
} = require("../controllers/productController");

const router = express.Router();
// create routes here

// Get all products
router.route("/products").get(getAllProducts);
//Create Products
router.route("/products/new").post(createProduct);
//update products
router.route("/products/:id").put(updateProducts);

module.exports = router;
