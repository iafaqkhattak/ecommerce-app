const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "Please Enter Product Description "],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, " Please Enter Product Category"],
  },

  stock: {
    type: String,
    required: [true, "Please Enter Product Stock"],
    maxLength: [4, "Stock cannot exceed 4 Characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
  ],

  //check which user created a product
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

///exports the function with product-model
module.exports = mongoose.model("Product", productSchema);
