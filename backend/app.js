const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
//import all routes here........
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

//import Error Middleswares
app.use(errorMiddleware);
module.exports = app;
