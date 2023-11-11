const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());

//import all routes here........
const product = require("./routes/productRoute");
app.use("/api/v1", product);

//import Error Middleswares
app.use(errorMiddleware);
module.exports = app;
