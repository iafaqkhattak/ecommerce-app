const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Config with #path
dotenv.config({ path: "backend/config/config.env" });

//connecting with dataBase
connectDatabase();

//create server
app.listen(process.env.port, () => {
  console.log(`Server is running on http://localhost:${process.env.port}`);
});

//Unhandled Promise  Rejection
