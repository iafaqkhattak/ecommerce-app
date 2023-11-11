const express = require("express");
const app = express();
app.use(express.json());

//import all routes here........
const product = require("./routes/productRoute");
app.use("/api/v1", product);

module.exports = app;
