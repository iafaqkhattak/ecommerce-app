const productModel = require("../models/productModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("../middleware/asyncFuncErrorHandler");
const ApiFeatures = require("../utils/apiFeatures");

//controllers for products with status & check on Postman

//create Products APi ---Admin
exports.createProduct = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const getProduct = await Product.create(req.body);

  res.status(201).json({
    success: true,
    getProduct,
  });
});

//Get all products
exports.getAllProducts = catchAsync(async (req, res) => {
  const productCount = await Product.countDocuments();
  const itemPerPage = 5;

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pageInation(itemPerPage);
  const products = await apiFeatures.query;

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
exports.getProductDetails = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

// Update Products ---Admin
exports.updateProducts = catchAsync(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
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
});

// Delete Products
exports.deleteProducts = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
