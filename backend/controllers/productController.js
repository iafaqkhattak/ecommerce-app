//import model and schema here
const productModel = require("../models/productModel");
const Product = require("../models/productModel");

//controllers for products with status & check on Postman

//create Products APi ---Admin
exports.createProduct = async (req, res, next) => {
  const getProduct = await Product.create(req.body);

  res.status(201).json({
    success: true,
    getProduct,
  });
};

//Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

// Update Products ---Admin
exports.updateProducts = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Products Not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};
