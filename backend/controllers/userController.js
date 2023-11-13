const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("../middleware/asyncFuncErrorHandler");
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");

// Register a user
exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is sample Id",
      url: "profilepicurl",
    },
  });

  sendToken(user, 201, res);
  // const token = user.getJWTToken();
  // res.status(201).json({
  //   success: true,
  //   token,
  // });
});

// Login
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //checking  if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Your Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);

  // const token = user.getJWTToken();
  // res.status(200).json({
  //   success: true,
  //   token,
  // });
});

//Logout

exports.logOutUser = catchAsync(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    messgae: "Logged Out",
  });
});
